import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare , FaLinkedin  } from "react-icons/fa";

const Hero = () => {
    return <>
        <section>
            <div className='earth' ></div>
            <div className='circle' >
                <span style={{ '--i': 1 }}> C </span>
                <span style={{ '--i': 2 }} > o </span>
                <span style={{ '--i': 3 }} > m </span>
                <span style={{ '--i': 4 }} > i </span>
                <span style={{ '--i': 5 }} > n </span>
                <span style={{ '--i': 6 }} > g </span>
                <span style={{ '--i': 7 }} > S </span>
                <span style={{ '--i': 8 }} > o </span>
                <span style={{ '--i': 9 }} > o </span>
                <span style={{ '--i': 10 }} > n </span>
                <span style={{ '--i': 11 }} > S </span>
                <span style={{ '--i': 12 }} > t </span>
                <span style={{ '--i': 13 }} > a </span>
                <span style={{ '--i': 14 }} > y </span>
                <span style={{ '--i': 15 }} > t </span>
                <span style={{ '--i': 16 }} > u </span>
                <span style={{ '--i': 17 }} > n </span>
                <span style={{ '--i': 18 }} > e </span>
                <span style={{ '--i': 19 }} > d </span>
                <span style={{ '--i': 20 }} > c </span>
                <span style={{ '--i': 21 }} > o </span>
                <span style={{ '--i': 22 }} > m </span>
                <span style={{ '--i': 23 }} > p </span>
                <span style={{ '--i': 24 }} > a </span>
                <span style={{ '--i': 25 }} > n </span>
                <span style={{ '--i': 26 }} > y </span>
                <span style={{ '--i': 27 }} > m </span>
                <span style={{ '--i': 28 }} > a </span>
                <span style={{ '--i': 29 }} > j </span>
                <span style={{ '--i': 30 }} > a </span>
                <span style={{ '--i': 31 }} > r </span>
                <span style={{ '--i': 32 }} > a </span>
                <span style={{ '--i': 33 }} > h </span>
            </div>
            <div className='icons' >
                <div className='footerIcons'>
                    <button onClick={() => open('https://www.facebook.com/company/majarah/')}><FaFacebookSquare  /></button>
                    <button onClick={() => open('https://www.linkedin.com/company/majarah/')}><FaLinkedin  /></button>
                </div>
            </div>

        </section>

    </>
}

export default Hero