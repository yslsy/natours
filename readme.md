# Natours Application

Bulit using modern technologies: `node.js`, `express`, `mongoDB`, `mongoose`

1. [Summary 專案簡介](https://github.com/yslsy/natours/tree/master#summary)
2. [Demo 專案展示](https://github.com/yslsy/natours/tree/master#demo)
3. [Feature 專案介紹](https://github.com/yslsy/natours/tree/master#feature)

## Summary

Natours 是一個旅遊行程電商平台，會員在註冊登入後，可點選喜歡的行程進行預定。
Natours is a travel e-commerce platform where members, upon registering and logging in, can select their preferred trips for reservations.
![Home](https://github.com/yslsy/natours/blob/master/readmeImage/Home.png)

## DEMO

### Demo Link

https://natours-lr0h.onrender.com/

### Demo Account

| account          | password |
| ---------------- | -------- |
| test@example.com | pass1234 |

### Credit Card for Test

| -           | -                |
| ----------- | ---------------- |
| Card Number | 4242424242424242 |
| Valid Date  | 01/24            |
| CVV         | 123              |

## Feature

### Member System

Provide member registration function. After logging in as a member, you can make a reservation and payment for the trip.
提供會員註冊功能，登入會員後可預約行程及付款。
![Login](https://github.com/yslsy/natours/blob/master/readmeImage/Login.png)
![Signup](https://github.com/yslsy/natours/blob/master/readmeImage/Signup.png)

### Change Member Data

Member page allows modification of name, email, profile picture upload, and changing account password.
會員頁面可修改名字、郵箱、上傳大頭貼，更改會員帳號密碼。
![Account setting](https://github.com/yslsy/natours/blob/master/readmeImage/Account%20setting.png)
*修改名字、郵箱、上傳大頭貼
![Account setting](https://github.com/yslsy/natours/blob/master/readmeImage/Account%20password%20setting.png)
*修改帳號密碼
![changepassword](https://github.com/yslsy/natours/blob/master/readmeImage/changepassword.gif) \*修改帳號密碼流程

### Booking Travel

Enable payment functionality through Stripe to allow members to make reservations for trips and process payments
通過`Stripe`提供支付功能，讓會員預定行程及付款。
![Booking](https://github.com/yslsy/natours/blob/master/readmeImage/booking.gif)
