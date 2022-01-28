import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Navbar.css";

const HeaderContainer = () => {
    return (
        <>
            <div className="headerContainer">
                <Container fluid="sm" style={{ padding: "50px" }}>
                    <div className="headerContent">
                    <p>
                        কালে চক্রে মননে মানসিকতায় মেল-বন্ধন খুঁজে পাওয়া কিছু মানুষের স্বপ্ন নিয়ে পেন্সিল। এদের ক'জন সব্যসাচী লেখিয়ে, কেউ একেবারেই আনকোরা-
                        তবু সাহস করে প্রথম কদম রেখেছে লেখিয়েদের ভূ-খণ্ডে। আলো ছড়ানো, পরিচ্ছন্ন মতবিনিময়ের জন্যে লেখিয়ে এবং পাঠকদের নিয়েই পেন্সিল।
                        নানা বয়সের, নানা মতাদর্শের, নানা রঙের মানুষের সমাবেশে পেন্সিল। খুব সামান্যই চাওয়া উদ্যোক্তাদের- প্রজন্ম থেকে প্রজন্মান্তরে সাহিত্য ও সংস্কৃতি
                        চর্চা ছড়িয়ে দেওয়া। সময়গুলি সৃজনশীল পজিটিভিটিতে ভরিয়ে তোলা।
                    </p> <br></br>
                    </div>
                    <div className="headerContent-button">
                        <Button variant="outline-danger"> পেন্সিল ফেসবুক গ্রুপে জয়েন করার জন্য এইখানে ক্লিক করুন। </Button>{' '}
                    </div>
                </Container>

            </div>
        </>
    );
};

export default HeaderContainer;
