const request = require("supertest");
var mongoose = require("mongoose");
let server;

const { Book } = require("../../models/book");
const { Admin } = require("../../models/admin");

describe("/api/books", () => {
  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(async () => {
    await Book.deleteMany();
  });
  afterAll(async () => {
    await server.close();
  });

  describe("GET /", () => {
    it("should return all books and statusCode should be 200", async () => {
      await Book.collection.insertMany([
        {
          title: "book1",
          author: "author1",
          genre: {
            _id: mongoose.Types.ObjectId(),
            name: "genreName1",
          },
          price: "price1",
          pageNumber: "pageNumber1",
          publishedYear: "publishedYear1",
        },
        {
          title: "book2",
          author: "author2",
          genre: {
            _id: mongoose.Types.ObjectId(),
            name: "genreName2",
          },
          price: "price2",
          pageNumber: "pageNumber2",
          publishedYear: "publishedYear2",
        },
      ]);
      const res = await request(server).get("/api/books");
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(
        res.body.some(
          (x) =>
            x.title === "book1" &&
            x.author === "author1" &&
            x.genre.name === "genreName1" &&
            x.price === "price1" &&
            x.pageNumber === "pageNumber1" &&
            x.publishedYear === "publishedYear1"
        )
      ).toBeTruthy();
      expect(
        res.body.some(
          (x) =>
            x.title === "book2" &&
            x.author === "author2" &&
            x.genre.name === "genreName2" &&
            x.price === "price2" &&
            x.pageNumber === "pageNumber2" &&
            x.publishedYear === "publishedYear2"
        )
      ).toBeTruthy();
    });
  });

  describe("GET /:id", () => {
    it("should return a book if a valid id is provided", async () => {
      const book = new Book({
        title: "book1",
        author: "author1",
        genre: {
          _id: mongoose.Types.ObjectId(),
          name: "genreName1",
        },
        price: "price1",
        pageNumber: "pageNumber1",
        publishedYear: "publishedYear1",
      });
      await book.save();

      const res = await request(server).get("/api/books/" + book._id);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("title", book.title);
      expect(res.body).toHaveProperty("author", book.author);
      expect(res.body.genre).toHaveProperty("name", book.genre.name);
      expect(res.body).toHaveProperty("price", book.price);
      expect(res.body).toHaveProperty("pageNumber", book.pageNumber);
      expect(res.body).toHaveProperty("publishedYear", book.publishedYear);
    });

    it("should return 400 if invalid object id is provided", async () => {
      const res = await request(server).get("/api/books/" + 1);

      expect(res.status).toBe(400);
    });

    it("should return 404 if valid id is provided but there is no data with this id", async () => {
      const objId = mongoose.Types.ObjectId();
      const res = await request(server).get("/api/books/" + objId);

      expect(res.status).toBe(404);
    });
  });

  describe("POST /", () => {
    let token;
    let title, author, genre, price, pageNumber, publishedYear;

    const execute = async () => {
      return await request(server)
        .post("/api/books")
        .set("x-auth-token", token)
        .send({ title, author, genre, price, pageNumber, publishedYear });
    };

    beforeEach(() => {
      token = new Admin().generateAuthToken();
      title = "book1";
      author = "author1";
      (genreId = mongoose.Types.ObjectId()), (price = "price1");
      pageNumber = "pageNumber1";
      publishedYear = "publishedYear1";
    });

    it("should return 401 if client is not logged in", async () => {
      token = "";

      const res = await execute();

      expect(res.statusCode).toBe(401);
    });

    it("should return a 400 if the length of given title is less than 3 characters", async () => {
      title = "12";

      const res = await execute();

      expect(res.statusCode).toBe(400);
    });

    it("should return a 400 if the length of given title is greater than 255 characters", async () => {
      title = new Array(257).join("a");

      const res = await execute();

      expect(res.statusCode).toBe(400);
    });

    it("should return a 400 if the length of given author is less than 5 characters", async () => {
      author = "1234";

      const res = await execute();

      expect(res.statusCode).toBe(400);
    });

    it("should return a 400 if the length of given author is greater than 255 characters", async () => {
      author = new Array(257).join("a");

      const res = await execute();

      expect(res.statusCode).toBe(400);
    });
  });
});
