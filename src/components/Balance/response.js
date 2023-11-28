// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Table from './table';
//
// const YourComponent = () => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://reqres.in/api/users');
//                 setData(response.data.data);
//             } catch (error) {
//                 console.error('Ошибка запроса:', error.message);
//                 console.error('Подробности ошибки:', error);
//                 setError(error.message);
//             }
//         };
//         fetchData();
//     }, []);
//
//     if (error) {
//         return <div>Ошибка: {error}</div>;
//     }
//
//     if (!data) {
//         return <div>Загрузка...</div>;
//     }
//
//     return (
//         <div>
//             <p>Данные успешно загружены:</p>
//             <Table userData={data} />
//         </div>
//     );
// };
//
// export default YourComponent;


// const axios = require('axios');
//
// // Замените URL на фактический URL вашего сервера
// const url = 'http://52.195.209.129/balance/';
//
// // Замените эти значения на фактические данные
// const dataToSend = {
//     token: 'BNB',
//     percentage: 40,
// };
//
// axios.post(url, dataToSend)
//     .then(response => {
//         console.log('Успешный ответ от сервера:', response.data);
//         // Обработайте успешный ответ здесь
//     })
//     .catch(error => {
//         console.error('Ошибка запроса:', error.message);
//         // Обработайте ошибку здесь
//     });
