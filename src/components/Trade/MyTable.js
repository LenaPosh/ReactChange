import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './MyTable.css';

const MyTable = () => {
    const data = [
        {
            Datetime: '31.01.24 06:30:51',
            Active: 'HYPERGPT',
            BaseActive: 'WBNB',
            Amount: '347.13',
            Profit: '$0.5',
            details: [
                { direction: 'BUY', quantity: '347.13', commission: '0.09', link: 'https://bscscan.com/tx/0xd26f724f9dea70c68faf8017c492aa08c2c0e962b945e9af4a13e3f1da94e50e' },
                { direction: 'SELL', quantity: '347.80', commission: '0.08', link: 'https://bscscan.com/tx/0xfa91d85199a1c8fb47867bf5973bccb6aa3b01dee29d97e3eaea8225dfccc7ad' },
            ],
        },
        {
            Datetime: '31.01.24 05:36:54',
            Active: 'BSC Wrapped Jupiter',
            BaseActive: 'WBNB',
            Amount: '409.38',
            Profit: '$34.29',
            details: [
                { direction: 'BUY', quantity: '409.38', commission: '3.76', link: 'https://bscscan.com/tx/0x498149e40843e2bd17f0db734b13074fd68c64182ca5ee61e17371ca43d1daf9' },
                { direction: 'SELL', quantity: '447.51', commission: '0.08', link: 'https://bscscan.com/tx/0x284b1e5a0e1bbbb45ca23382289fd278bef1dca2dcda433791b28e92951e10b6' },
            ],
        },
        {
            Datetime: '31.01.24 04:50:46',
            Active: 'Bomber Coin',
            BaseActive: 'WBNB',
            Amount: '277.30',
            Profit: '$6.41',
            details: [
                { direction: 'BUY', quantity: '277.30', commission: '0.72', link: 'https://bscscan.com/tx/0xdf9d6ff5833b820747eb2d6c7f5206397eda75e38277e6652e166c329f110fab' },
                { direction: 'SELL', quantity: '284.52', commission: '0.09', link: 'https://bscscan.com/tx/0xf4a5c354089dd2640e6bcf96461fdfa83476c9add0759335f3d4c77796980e94' },
            ],
        },
        {
            Datetime: '31.01.24 02:03:52',
            Active: 'When',
            BaseActive: 'WBNB',
            Amount: '100.09',
            Profit: '$10.95',
            details: [
                { direction: 'BUY', quantity: '100.09', commission: '1.18', link: 'https://bscscan.com/tx/0x08c3d900b604933886c84a0c86c12887fe73339a345e5f65f9e24d3204cfa88a' },
                { direction: 'SELL', quantity: '112.30', commission: '0.08', link: 'https://bscscan.com/tx/0x9466ffafcfa934a68e950ff80b77c82b0426ac9d75572706d8ff4360b53b28ad' },
            ],
        },
        {
            Datetime: '31.01.24 01:43:30',
            Active: 'Dracarys',
            BaseActive: 'WBNB',
            Amount: '610.44',
            Profit: '$23.51',
            details: [
                { direction: 'BUY', quantity: '610.44', commission: '2.48', link: 'https://bscscan.com/tx/0x816988fc7e72a11d69cb69c324109f1861c25522cff4747052d13fb52beb4dd9' },
                { direction: 'SELL', quantity: '636.51', commission: '0.08', link: 'https://bscscan.com/tx/0xfc4847fa82d0585db2a791bde830bea8671633e4e7a8d8fd1c16891adbcf61cb' },
            ],
        },
        {
            Datetime: '31.01.24 01:35:24',
            Active: 'BSC Wrapped Jupiter ',
            BaseActive: 'WBNB',
            Amount: '178.41',
            Profit: '$6.4',
            details: [
                { direction: 'BUY', quantity: '178.41', commission: '0.71', link: 'https://bscscan.com/tx/0x3d000cf141459f91b634076575b0fdfbcdcf875d632a8dfcecdd7754af981e89' },
                { direction: 'SELL', quantity: '185.60', commission: '0.08', link: 'https://bscscan.com/tx/0x4f285bc94b7f92358f4ed8820b4c27e93c1a3af57e8649b2d6382bd6d77953b4' },
            ],
        },
        {
            Datetime: '31.01.24 07:20:24',
            Active: 'BSC Wrapped Jupiter ',
            BaseActive: 'WBNB',
            Amount: '430.33',
            Profit: '$63.07',
            details: [
                { direction: 'BUY', quantity: '430.33', commission: '6.92', link: 'https://bscscan.com/tx/0x966514bfe9e9bf124c39f5b68a361cd5fdfd00f8842a3178bce61347f90b3409' },
                { direction: 'SELL', quantity: '500.40', commission: '0.08', link: 'https://bscscan.com/tx/0x5f9891539c1fe9b7928e087f41b4d243804d4ba2275f182de2153232f46ba327' },
            ],
        },
        {
            Datetime: '31.01.24 07:01:12 ',
            Active: 'PORK',
            BaseActive: 'WBNB',
            Amount: '5868.04',
            Profit: '$12.08',
            details: [
                { direction: 'BUY', quantity: '5868.04', commission: '0.14', link: 'https://bscscan.com/tx/0xcf19b1c0f20638d1795c001465d474165546b5b64c88dfa66058853a6274601f' },
                { direction: 'SELL', quantity: '5880.38', commission: '0.12', link: 'https://bscscan.com/tx/0xfd5c3a4f901721f8d64046117d50dc9433b1910d1a37bfa9ad24012eb63508f7' },
            ],
        },
        {
            Datetime: '31.01.24 06:43:39',
            Active: 'BSC Wrapped Jupiter ',
            BaseActive: 'WBNB',
            Amount: '122.53',
            Profit: '$1.26',
            details: [
                { direction: 'BUY', quantity: '122.53', commission: '0.15', link: 'https://bscscan.com/tx/0x7a9ca69ac2dba7dd17a18ec231b748609f0c833918664fedd7c025b1af688049' },
                { direction: 'SELL', quantity: '124.02', commission: '0.08', link: 'https://bscscan.com/tx/0xd406dac040f3e98b406f4cf88ca2f58543cd7851f6272a9ddb860d8a96b465ba' },
            ],
        },
        {
            Datetime: '31.01.24 04:36:04',
            Active: 'JiaoZi',
            BaseActive: 'WBNB',
            Amount: '187.27',
            Profit: '$3.19',
            details: [
                { direction: 'BUY', quantity: '187.27', commission: '0.41', link: 'https://bscscan.com/tx/0x3ff8b8e7687a797d888c769dba30a3ce4b094f71df4a490aa38370df5ecf4731' },
                { direction: 'SELL', quantity: '191.00', commission: '0.13', link: 'https://bscscan.com/tx/0x56557461c3196f60d1da218597b68a7a5ab8a812e8980ca9289a89cab2ac2734' },
            ],
        },
        {
            Datetime: '31.01.24 01:21:27',
            Active: 'KaBoSu',
            BaseActive: 'WBNB',
            Amount: '124.63',
            Profit: '$0.05',
            details: [
                { direction: 'BUY', quantity: '124.63', commission: '2.17', link: 'https://bscscan.com/tx/0x55d72d6c98db7447dc07da264d301a8f7ed02cead57a62b214e16b7057b2a249' },
                { direction: 'SELL', quantity: '126.95', commission: '0.10', link: 'https://bscscan.com/tx/0x80f8e15b4c807c4d507ed3c7aebe2d3ed0661c22eced96858623ef0bc7b6c4b8' },
            ],
        },
        {
            Datetime: '31.01.24 01:15:39',
            Active: 'Bomber Coin',
            BaseActive: 'WBNB',
            Amount: '1457.94',
            Profit: '$26.48',
            details: [
                { direction: 'BUY', quantity: '1457.94', commission: '15.36', link: 'https://bscscan.com/tx/0x70d5eb0e02a0424beba250137e7e27ab010d84738b0d12355868d0d8360be11f' },
                { direction: 'SELL', quantity: '1499.87', commission: '0.09', link: 'https://bscscan.com/tx/0xf46433caccf993f08dcc3bb894d624bfd8f9164790713fdf606c982d6d054bf1' },
            ],
        },





        {
            Datetime: '30.01.24 11:19:14',
            Active: 'Zodiacsv2',
            BaseActive: 'WBNB',
            Amount: '106.07',
            Profit: '$0.69',
            details: [
                { direction: 'BUY', quantity: '106.07', commission: '0.09', link: 'https://bscscan.com/tx/0x99a10c63a379ebc077dc80da47f8c88aebaa82166feae1ac074f26209f6e3f74' },
                { direction: 'SELL', quantity: '106.93', commission: '0.08', link: 'https://bscscan.com/tx/0x5dd6aa196d35ae04d1e9b7d9a145a5ffdbf4df0f0f9f62d40efdfd05052f9bc3' },
            ],
        },
        {
            Datetime: '30.01.24 10:40:14',
            Active: 'Zodiacsv2',
            BaseActive: 'WBNB',
            Amount: '274.24',
            Profit: '$7.01',
            details: [
                { direction: 'BUY', quantity: '274.24', commission: '0.78', link: 'https://bscscan.com/tx/0xb9bf2386d9a833653b70679a05e9f67fe1861f15f8af3d402b853907aad67d5f' },
                { direction: 'SELL', quantity: '282.11', commission: '0.08', link: 'https://bscscan.com/tx/0xf48dbc7c9e4339c8a92e61bbbc3ff47cf2e3cda93c8c82d5ddd0cccbe1227494' },
            ],
        },
        {
            Datetime: '30.01.24 07:48:22',
            Active: 'CVIP',
            BaseActive: 'WBNB',
            Amount: '328.91',
            Profit: '$12.42',
            details: [
                { direction: 'BUY', quantity: '328.91', commission: '1.29', link: 'https://bscscan.com/tx/0x0b1060a52b7afa5a5122b6e21e12c28421139274ba48438a454754e705b9f4dc' },
                { direction: 'SELL', quantity: '342.70', commission: '0.08', link: 'https://bscscan.com/tx/0xb4dd1a45b5126b0fc96be81d5f1590adf048e85f1c81ced32adc059c16773864' },
            ],
        },
        {
            Datetime: '30.01.24 07:26:57',
            Active: 'Binance-Peg BitTorrent Token',
            BaseActive: 'WBNB',
            Amount: '1323.20',
            Profit: '$10.52',
            details: [
                { direction: 'BUY', quantity: '1323.20', commission: '23.50', link: 'https://bscscan.com/tx/0x12345165500af6f3992dbfa6b84dc11bdd12beeb840cb0ee260082ec92f9b179' },
                { direction: 'SELL', quantity: '1357.31', commission: '0.09', link: 'https://bscscan.com/tx/0xa6af98502154fb44e7a78569f96a93370169f45838bbe753988718529484b69c' },
            ],
        },
        {
            Datetime: '30.01.24 06:50:00',
            Active: 'RageOnWheels',
            BaseActive: 'WBNB',
            Amount: '624.32',
            Profit: '$2.28',
            details: [
                { direction: 'BUY', quantity: '624.32', commission: '0.28', link: 'https://bscscan.com/tx/0xe4bcb16923d75e27d0d9791981395f059a103969811797c71d8d852cfe237d57' },
                { direction: 'SELL', quantity: '626.96', commission: '0.08', link: 'https://bscscan.com/tx/0x0ecb2ab4be3e17b0c62b3bb5d7aa3a3f9f6cd876b9e1cfbb2787e1815c54b26d' },
            ],
        },




        {
            Datetime: '30.01.24 03:26:16',
            Active: 'Bomber Coin',
            BaseActive: 'WBNB',
            Amount: '2138.70',
            Profit: '$9.4',
            details: [
                { direction: 'BUY', quantity: '2138.70', commission: '1.01', link: 'https://bscscan.com/tx/0x4957d7e05bdc6ea4ddbdd793a7b6648a62f425625bdd84a89036c89b39ff21e9' },
                { direction: 'SELL', quantity: '2149.20', commission: '0.09', link: 'https://bscscan.com/tx/0xe04dab90dee0bf946efa3b4016eeedcea54427fcff3508eaa89aac288164fc48' },
            ],
        },
        {
            Datetime: '30.01.24 12:28:35',
            Active: 'Luna Rush Token',
            BaseActive: 'WBNB',
            Amount: '578.47',
            Profit: '$5.49',
            details: [
                { direction: 'BUY', quantity: '578.47', commission: '0.61', link: 'https://bscscan.com/tx/0x467c1756764ad6d870997b593c72e31c92e824d1374261fbe756105cdf5b1fe0' },
                { direction: 'SELL', quantity: '584.65', commission: '0.08', link: 'https://bscscan.com/tx/0x07bf53c0883a423fd1d711a280e00daa3cbea6092d083b29d93ee416629c7c9a' },
            ],
        },
        {
            Datetime: '30.01.24 11:49:44',
            Active: 'Chain of Legends Token',
            BaseActive: 'WBNB',
            Amount: '651.22',
            Profit: '$6.35',
            details: [
                { direction: 'BUY', quantity: '651.22', commission: '0.70', link: 'https://bscscan.com/tx/0x6b1485705ac69cadc6f831aca58513ed2f985142ec107bbe679921161805825a' },
                { direction: 'SELL', quantity: '658.36', commission: '0.09', link: 'https://bscscan.com/tx/0xf3016d8f78ce6886dfa0b2a0e33737993217e154e8ccbcd36c06eebb2c46917e' },
            ],
        },
        {
            Datetime: '30.01.24 11:16:09',
            Active: 'Bomber Coin',
            BaseActive: 'WBNB',
            Amount: '307.61',
            Profit: '$6.35',
            details: [
                { direction: 'BUY', quantity: '307.61', commission: '0.72', link: 'https://bscscan.com/tx/0x1be2a61c63a0b22de02880cf296e3e2c670e7b62f2740bd5bfa7869f632910d5' },
                { direction: 'SELL', quantity: '314.77', commission: '0.09', link: 'https://bscscan.com/tx/0xb7819dfdbca2e4bfafa0b91280d11446d47b417764f80a6c60a5a407e2764bff' },
            ],
        },
        {
            Datetime: '30.01.24 10:26:01',
            Active: 'FomoFi',
            BaseActive: 'WBNB',
            Amount: '301.31',
            Profit: '$1.76',
            details: [
                { direction: 'BUY', quantity: '301.31', commission: '0.33', link: 'https://bscscan.com/tx/0x3fb372912931b33c53a07addf63c6f2d3f2118f5cfd40785d13821c82c98b250' },
                { direction: 'SELL', quantity: '303.69', commission: '0.29', link: 'https://bscscan.com/tx/0x4895f8e80ab5e67d9be0244748e058af1158458ce27a39fc31d55898c72257fd' },
            ],
        },
        {
            Datetime: '30.01.24 10:06:09',
            Active: 'APC',
            BaseActive: 'WBNB',
            Amount: '1110.61',
            Profit: '$50.48',
            details: [
                { direction: 'BUY', quantity: '1110.61', commission: '5.64', link: 'https://bscscan.com/tx/0x4c89e581eafe8a49a15ed132489b0bcb0fd3da44d273f1bb04f93f5429984509' },
                { direction: 'SELL', quantity: '1167.14', commission: '0.41', link: 'https://bscscan.com/tx/0x768559cf48c9b0221ace39016fcc9d1631504de3cf29c9df344d91034dda088d' },
            ],
        },
        {
            Datetime: '30.01.24 10:01:09',
            Active: 'Legend of Annihilation',
            BaseActive: 'WBNB',
            Amount: '163.47',
            Profit: '$1.76',
            details: [
                { direction: 'BUY', quantity: '163.47', commission: '0.34', link: 'https://bscscan.com/tx/0xd05f8ff618386f95d17fc61b0592bd1bb6bfe97091e4ecd7c8f76abb6785fa7b' },
                { direction: 'SELL', quantity: '165.72', commission: '0.15', link: 'https://bscscan.com/tx/0x835819309c9be6a6cf4c1f47a3279118d32ac10165f07cb57c9c0564d826a426' },
            ],
        },
        {
            Datetime: '30.01.24 05:15:48',
            Active: 'Tidex Token',
            BaseActive: 'WBNB',
            Amount: '1176.62',
            Profit: '$5.97',
            details: [
                { direction: 'BUY', quantity: '1176.62', commission: '0.71', link: 'https://bscscan.com/tx/0x1379a99a56afcebec14798bfc314e6394250bcbf3e930c6a80367e03fb5689ff' },
                { direction: 'SELL', quantity: '1183.44', commission: '0.14', link: 'https://bscscan.com/tx/0x9701f1786baa3d3316daf08bf2da0e8c962f4a65d5336843ce570b44c23276a9' },
            ],
        },
        {
            Datetime: '30.01.24 04:37:00',
            Active: 'Binance-Peg BSC-USD',
            BaseActive: 'WBNB',
            Amount: '77.53',
            Profit: '$1.82',
            details: [
                { direction: 'BUY', quantity: '77.53', commission: '1.05', link: 'https://bscscan.com/tx/0xaca74a3bda6a11e63bd2b907b891b173d56c0c9173a5d6ac7b09474a562c24e2' },
                { direction: 'SELL', quantity: '81.64', commission: '1.24', link: 'https://bscscan.com/tx/0x3f625690dc7481aa3c2611159b9b8ece4b297365f103dd4a18394b9d5a3ecbda' },
            ],
        },
        {
            Datetime: '30.01.24 12:32:19',
            Active: 'Bomber Coin',
            BaseActive: 'WBNB',
            Amount: '2497.23',
            Profit: '$42.51',
            details: [
                { direction: 'BUY', quantity: '2497.23', commission: '4.39', link: 'https://bscscan.com/tx/0xac9542aa51fdcf7557e4dc5a0defba2a8dfb9e5deca16223fa19197393358c96' },
                { direction: 'SELL', quantity: '2544.22', commission: '0.09', link: 'https://bscscan.com/tx/0x71b18c5b36963d822f6c35984f23fd25a360c3b0fe1bd169eddfd4d72644e3fa' },
            ],
        },


        {
            Datetime: '29.01.24 12:32:19',
            Active: 'Bomber Coin',
            BaseActive: 'WBNB',
            Amount: '2497.23',
            Profit: '$42.51',
            details: [
                { direction: 'BUY', quantity: '2497.23', commission: '4.39', link: 'https://bscscan.com/tx/0xac9542aa51fdcf7557e4dc5a0defba2a8dfb9e5deca16223fa19197393358c96' },
                { direction: 'SELL', quantity: '2544.22', commission: '0.09', link: 'https://bscscan.com/tx/0x71b18c5b36963d822f6c35984f23fd25a360c3b0fe1bd169eddfd4d72644e3fa' },
            ],
        },
        {
            Datetime: '29.01.24 12:17:55',
            Active: 'When',
            BaseActive: 'WBNB',
            Amount: '240.98',
            Profit: '$1.24',
            details: [
                { direction: 'BUY', quantity: '240.98', commission: '0.24', link: 'https://bscscan.com/tx/0xf461c62e05d702bbcd272d203f7b7c3aed65b206418d03131e28b24797b67876' },
                { direction: 'SELL', quantity: '242.60', commission: '0.14', link: 'https://bscscan.com/tx/0xccaaae7ea076332c92cb850e37cff1569192c617bc562f2b7b93824b5a994c1d' },
            ],
        },
        {
            Datetime: '29.01.24 11:45:06',
            Active: 'When',
            BaseActive: 'WBNB',
            Amount: '4746.13',
            Profit: '$26.18',
            details: [
                { direction: 'BUY', quantity: '4746.13', commission: '2.75', link: 'https://bscscan.com/tx/0x89e44eea76c9aed3a702bfa7c678244419769c8fe5629cf6fd14dd1edc30188b' },
                { direction: 'SELL', quantity: '4775.14', commission: '0.08', link: 'https://bscscan.com/tx/0x068c87b40c25dea4e074723a19d4971a0cd71002e52c21768269f7ea7eefb583' },
            ],
        },
        {
            Datetime: '29.01.24 10:19:51',
            Active: 'PAID Network',
            BaseActive: 'WBNB',
            Amount: '2947.91',
            Profit: '$16.48',
            details: [
                { direction: 'BUY', quantity: '2947.91', commission: '9.07', link: 'https://bscscan.com/tx/0xc289a6033b1a2cd4a6ca7c1c838608f3b07ffb62c7254285db0af05dcb675fcf' },
                { direction: 'SELL', quantity: '2973.56', commission: '0.10', link: 'https://bscscan.com/tx/0x71463d82694818822d701b661192f9fe7203eaf17a1e85a05d97cd5f47154d49' },
            ],
        },
        {
            Datetime: '29.01.24 09:22:16',
            Active: 'BSC Wrapped Jupiter',
            BaseActive: 'WBNB',
            Amount: '313.11',
            Profit: '$2.95',
            details: [
                { direction: 'BUY', quantity: '313.11', commission: '0.35', link: 'https://bscscan.com/tx/0x0a1dd63eb7eb57ed0fb8bfe2b4c1c82676738a33918719c628be2137e77f247a' },
                { direction: 'SELL', quantity: '316.49', commission: '0.08', link: 'https://bscscan.com/tx/0x216dfede2716d7aac989ef7339b6640e4c196cc692de1f9f0c3cbca605680f53' },
            ],
        },
        {
            Datetime: '29.01.24 08:02:14',
            Active: 'FACEBOOK',
            BaseActive: 'WBNB',
            Amount: '16.67',
            Profit: '$0.45',
            details: [
                { direction: 'BUY', quantity: '16.67', commission: '0.11', link: 'https://bscscan.com/tx/0x40cd3a3d690f17165a96d150dfefbb4455fa9e550a7cf4fe9c60b483ea2fdadf' },
                { direction: 'SELL', quantity: '17.31', commission: '0.08', link: 'https://bscscan.com/tx/0x72d5c36ef2a61d5a1c740dcc473c34ff9662a2a0c428909bd44d2a8c7825901b' },
            ],
        },
        {
            Datetime: '29.01.24 06:44:08',
            Active: 'Bomber Coin',
            BaseActive: 'WBNB',
            Amount: '897.04',
            Profit: '$8.86',
            details: [
                { direction: 'BUY', quantity: '897.04', commission: '1.02', link: 'https://bscscan.com/tx/0x53480c42d52329517f0dde9ce2c37b6e36d635210634bb6a0477e9cb5dcf1d76' },
                { direction: 'SELL', quantity: '907.01', commission: '0.09', link: 'https://bscscan.com/tx/0xe8474034d5d2fa44aa4f9d52ed39ba9b338bed591400c115034a088aae5cd6da' },
            ],
        },
        {
            Datetime: '29.01.24 04:32:01',
            Active: 'Bomber Coin',
            BaseActive: 'WBNB',
            Amount: '185.67',
            Profit: '$10.87',
            details: [
                { direction: 'BUY', quantity: '185.67', commission: '1.13', link: 'https://bscscan.com/tx/0x41d5f515ac7c5af8ecbedc3b6ad129caab7e73e0b54d7084f4bf8c7c23aa844b' },
                { direction: 'SELL', quantity: '197.76', commission: '0.09', link: 'https://bscscan.com/tx/0x0f794a4887d931a0914b145a68b29b5f91ee7d3c5dd4d751bb72b4c79d596330' },
            ],
        },
        {
            Datetime: '29.01.24 04:21:49',
            Active: 'Bomber Coin',
            BaseActive: 'WBNB',
            Amount: '186.10',
            Profit: '$4.6',
            details: [
                { direction: 'BUY', quantity: '186.10', commission: '0.53', link: 'https://bscscan.com/tx/0x0f9b209fdf8fc2a8fafc317500a18294f95e7f34832fe104f64605519fd2bad5' },
                { direction: 'SELL', quantity: '191.32', commission: '0.09', link: 'https://bscscan.com/tx/0xf4daf35cecb40fc0e377f851add0b5589d5d1a2afa3e8125e3deec534a3b5636' },
            ],
        },
        {
            Datetime: '29.01.24 12:59:33',
            Active: 'BABYLONG',
            BaseActive: 'WBNB',
            Amount: '3469.01',
            Profit: '$1526.82',
            details: [
                { direction: 'BUY', quantity: '3469.01', commission: '13.68', link: 'https://bscscan.com/tx/0xbd320ae1f56e7e497f183e07f450a1b43d071050385211b11ff93bab6deafb31' },
                { direction: 'SELL', quantity: '5022.14', commission: '12.63', link: 'https://bscscan.com/tx/0x113ba3c453e047e27a2116645e72a8f4a4216775fb9f9bd69e7ccef71827b803' },
            ],
        },
        {
            Datetime: '29.01.24 12:26:51',
            Active: 'Dracarys',
            BaseActive: 'WBNB',
            Amount: '112.06',
            Profit: '$0.4',
            details: [
                { direction: 'BUY', quantity: '112.06', commission: '2.27', link: 'https://bscscan.com/tx/0x83c5d0e085e001cd93113f96f3d945a3c603290d9c1cd7589f7cae9c583a7f30' },
                { direction: 'SELL', quantity: '114.82', commission: '0.09', link: 'https://bscscan.com/tx/0x14f514fe3276fa866950a232c791698319fefa434c69f739af94165c68747bb4' },
            ],
        },



        {
            Datetime: '29.01.24 07:46:21',
            Active: 'Mrweb Finance',
            BaseActive: 'WBNB',
            Amount: '59.75',
            Profit: '$2.51',
            details: [
                { direction: 'BUY', quantity: '59.75', commission: '0.31', link: 'https://bscscan.com/tx/0x7092db942cdf0cc822a8eef7a2ef2fa6a9f6644edb467f2ef95d59c9f23551bb' },
                { direction: 'SELL', quantity: '62.66', commission: '0.09', link: 'https://bscscan.com/tx/0x1938d62b34086713dc2505edbd95a52834c25bfaf94897b14a5d9252b578a903' },
            ],
        },
        {
            Datetime: '29.01.24 05:03:49',
            Active: 'GROK',
            BaseActive: 'WBNB',
            Amount: '424.93',
            Profit: '$2.08',
            details: [
                { direction: 'BUY', quantity: '424.93', commission: '0.31', link: 'https://bscscan.com/tx/0xe8c7b1c6e9961219ae6b1697ad1b8f5d0a56c17069b5cbdff91ce6301c43c506' },
                { direction: 'SELL', quantity: '427.53', commission: '0.21', link: 'https://bscscan.com/tx/0x85e369d6d30b816292a7e8afc500ae7ef41192620b5faa38295de2b1a9706b2c' },
            ],
        },
        {
            Datetime: '29.01.24 03:37:25',
            Active: 'JiaoZi',
            BaseActive: 'WBNB',
            Amount: '2307.96',
            Profit: '$23.81',
            details: [
                { direction: 'BUY', quantity: '2307.96', commission: '2.51', link: 'https://bscscan.com/tx/0x9f43d5a8245c71f895d6e6499f9fd6a4f17744e54b65f4f30cc053a8f47fcabb' },
                { direction: 'SELL', quantity: '2334.41', commission: '0.13', link: 'https://bscscan.com/tx/0x8074de64923659064d11c4eba8917d6e36dfc45a8d38b455e33b7abf6e9a1d62' },
            ],
        },
        {
            Datetime: '29.01.24 02:49:12',
            Active: 'Bomber Coin',
            BaseActive: 'WBNB',
            Amount: '3207.26',
            Profit: '$133.92',
            details: [
                { direction: 'BUY', quantity: '3207.26', commission: '12.50', link: 'https://bscscan.com/tx/0x8f054a24620f5660232bb0eb99d3bd8951950f7f4a856a39ea815202cf789fce' },
                { direction: 'SELL', quantity: '3353.77', commission: '0.09', link: 'https://bscscan.com/tx/0xf151ab0b30d771cdc5c5a25cd5f20d025dc8068303bdc92454758d86eaa452af' },
            ],
        },
        {
            Datetime: '29.01.24 02:45:20',
            Active: 'Bomber Coin',
            BaseActive: 'WBNB',
            Amount: '296.79',
            Profit: '$1.98',
            details: [
                { direction: 'BUY', quantity: '296.79', commission: '0.25', link: 'https://bscscan.com/tx/0x0d1db512cfdede87cdfcedd1acaa883f6b2a81dcd07472400397637b865a7948' },
                { direction: 'SELL', quantity: '299.11', commission: '0.09', link: 'https://bscscan.com/tx/0x85f1aa358b6d6350e59773435c69e55d0398d2f97da246258f4b03bb27b84de4' },
            ],
        },
        {
            Datetime: '29.01.24 02:29:19',
            Active: 'Bomber Coin',
            BaseActive: 'WBNB',
            Amount: '2262.86',
            Profit: '$24.28',
            details: [
                { direction: 'BUY', quantity: '2262.86', commission: '2.71', link: 'https://bscscan.com/tx/0x2e406a3432eedee5c67905a93d5a6dafe363108758d66c6a74d55efd9161b9ee' },
                { direction: 'SELL', quantity: '2289.94', commission: '0.09', link: 'https://bscscan.com/tx/0xf4586adec84424b5148dcb62b2a28918f5ebd7a4e76aed95e0a85848557231e8' },
            ],
        },
        {
            Datetime: '29.01.24 02:00:56',
            Active: 'FomoFi',
            BaseActive: 'WBNB',
            Amount: '349.52',
            Profit: '$3.78',
            details: [
                { direction: 'BUY', quantity: '349.52', commission: '0.52', link: 'https://bscscan.com/tx/0x53884c95ab9ecdaa94362875f6e46ff7ecf6c31ed45aa8889e4d029895361a50' },
                { direction: 'SELL', quantity: '354.11', commission: '0.29', link: 'https://bscscan.com/tx/0x38f1cf2736136882c39917e3f1851be824f2b3f99cd50553a9627e6156e31ed9' },
            ],
        },
        {
            Datetime: '29.01.24 01:45:42',
            Active: 'burn2.0 ',
            BaseActive: 'WBNB',
            Amount: '608.34',
            Profit: '$10.9',
            details: [
                { direction: 'BUY', quantity: '608.34', commission: '1.26', link: 'https://bscscan.com/tx/0x9a176b71c519e91899d0fb18b8c6cc1a5ddc510dfaf021c4ae393ddabd46e4f7' },
                { direction: 'SELL', quantity: '621.06', commission: '0.56', link: 'https://bscscan.com/tx/0x440550c5e3d874858f0adc4bd617bbdf820e18f60c714d180e40c53b234d89ef' },
            ],
        },



        {
            Datetime: '28.01.24 10:09:06',
            Active: 'Baby Bonk Coin',
            BaseActive: 'WBNB',
            Amount: '0.00',
            Profit: '$3.9',
            details: [
                { direction: 'BUY', quantity: '0.00', commission: '0.22', link: 'https://bscscan.com/tx/0xc1ba68ec1f2c17e56923e16d4b3febd2a8d2af93cd8f38a6437915de6fc27c02' },
                { direction: 'SELL', quantity: '4.44', commission: '0.32', link: 'https://bscscan.com/tx/0x13493afacbf9341a182a80a477d0bdf27f1f96ad13f5a5dea6d471e40d3be904' },
            ],
        },
        {
            Datetime: '28.01.24 09:26:56',
            Active: 'PAID Network',
            BaseActive: 'WBNB',
            Amount: '3673.24',
            Profit: '$47.2',
            details: [
                { direction: 'BUY', quantity: '3673.24', commission: '4.74', link: 'https://bscscan.com/tx/0xf90b679665b0272652c694bc0327da302a5e75e5ec28b748d0291d3d9efcd345' },
                { direction: 'SELL', quantity: '3725.27', commission: '0.09', link: 'https://bscscan.com/tx/0x48d771972b0193350e802d094d2ab6a59e6e08bc171f57750fa7497f15f60295' },
            ],
        },
        {
            Datetime: '28.01.24 09:06:59',
            Active: 'QuantumXC',
            BaseActive: 'WBNB',
            Amount: '41.15',
            Profit: '$5.41',
            details: [
                { direction: 'BUY', quantity: '41.15', commission: '0.61', link: 'https://bscscan.com/tx/0xd093ba51b1bbc7d619c9a59e3ea5479fd5d73a8e5f0f77d2576216da62689bd7' },
                { direction: 'SELL', quantity: '47.25', commission: '0.08', link: 'https://bscscan.com/tx/0xd165ddd1d2eb14a964ef9f2e98fca9d9b19eba562829a5aada01770ce66e53f3' },
            ],
        },
        {
            Datetime: '28.01.24 08:02:00',
            Active: 'BurnedFi',
            BaseActive: 'WBNB',
            Amount: '4268.38',
            Profit: '$37.92',
            details: [
                { direction: 'BUY', quantity: '4268.38', commission: '0.20', link: 'https://bscscan.com/tx/0xc4ab00341f586e5985383d37c6c02127e69a498c0af8e399842fe81be839deb0' },
                { direction: 'SELL', quantity: '4306.84', commission: '0.34', link: 'https://bscscan.com/tx/0xb8ef29c714cfe481946bd1d91c8728b6634939999ba027f552901f3af5464460' },
            ],
        },
        {
            Datetime: '28.01.24 06:38:44',
            Active: 'Good Games Guild',
            BaseActive: 'WBNB',
            Amount: '583.85',
            Profit: '$7.06',
            details: [
                { direction: 'BUY', quantity: '583.85', commission: '0.77', link: 'https://bscscan.com/tx/0xf0a27d22dc089d774ca7a91cd2f0959a8eda277d03309384c0262d3c62e71202' },
                { direction: 'SELL', quantity: '591.76', commission: '0.08', link: 'https://bscscan.com/tx/0x827db5c469320778ae8bd86d3d363590775d1a16e0bbbfe97767a5ef775820fd' },
            ],
        },
        {
            Datetime: '28.01.24 12:20:55',
            Active: 'Altura',
            BaseActive: 'WBNB',
            Amount: '1371.17',
            Profit: '$3.86',
            details: [
                { direction: 'BUY', quantity: '1371.17', commission: '0.11', link: 'https://bscscan.com/tx/0x0a6573a3e6522de07f7bd7066bc338b223c8d10288d0aac020b3f1c08e8ccf28' },
                { direction: 'SELL', quantity: '1375.24', commission: '0.10', link: 'https://bscscan.com/tx/0x0c771d8afa3d1c66c82e148aa40eacb1578f1ec1999f0600aa69e92ea73b1fe6' },
            ],
        },





        {
            Datetime: '27.01.24 10:59:27',
            Active: 'PAID Network',
            BaseActive: 'WBNB',
            Amount: '2758.09',
            Profit: '$5.33',
            details: [
                { direction: 'BUY', quantity: '2758.09', commission: '0.59', link: 'https://bscscan.com/tx/0x8d7ffecf41e711852cbd88882617337ed29522fcfbdfbe0d2e30b4bb2917d0b8' },
                { direction: 'SELL', quantity: '2764.10', commission: '0.09', link: 'https://bscscan.com/tx/0xfd6bed38c8a1a96399cd62339e6df3127879fa394da724f7687db92013c0e523' },
            ],
        },
        {
            Datetime: '27.01.24 06:56:15',
            Active: 'BSC Wrapped Jupiter',
            BaseActive: 'WBNB',
            Amount: '333.73',
            Profit: '$29.88',
            details: [
                { direction: 'BUY', quantity: '333.73', commission: '3.11', link: 'https://bscscan.com/tx/0x3e117c93d24ce659fac27cf7d1df5af23c1cc622431816c3677ef4ec9d7fe131' },
                { direction: 'SELL', quantity: '366.80', commission: '0.08', link: 'https://bscscan.com/tx/0xa032ae56eb4b803dd82b2ec6e0ddf39197d4fe6e2b5f0ea0c40d2e5e7481c801' },
            ],
        },
        {
            Datetime: '27.01.24 04:21:54',
            Active: 'RageOnWheels',
            BaseActive: 'WBNB',
            Amount: '1591.19',
            Profit: '$3.47',
            details: [
                { direction: 'BUY', quantity: '1591.19', commission: '3.28', link: 'https://bscscan.com/tx/0xebfc66f56094f88f49917c1fdd6f59240328c5ae33357442766d11670f330bfa' },
                { direction: 'SELL', quantity: '1598.02', commission: '0.08', link: 'https://bscscan.com/tx/0x61a6698005ca6c0ea3e7888e3b5fc4cda9dc59fe6fb8a539a910f784db16ce22' },
            ],
        },
        {
            Datetime: '27.01.24 01:46:52',
            Active: 'CRYPTALF',
            BaseActive: 'WBNB',
            Amount: '59.57',
            Profit: '$10.57',
            details: [
                { direction: 'BUY', quantity: '59.57', commission: '0.11', link: 'https://bscscan.com/tx/0xc69d7082d4165e664bc8ffc7c4b9822593322e69fdca788552ec6a26eaf18f38' },
                { direction: 'SELL', quantity: '70.33', commission: '0.08', link: 'https://bscscan.com/tx/0xff445e6758b5cd2b005ddde707c8e138a5f9884376f22d9f5d79fdf044082ce4' },
            ],
        },

        {
            Datetime: '27.01.24 07:38:45',
            Active: 'JiaoZi',
            BaseActive: 'WBNB',
            Amount: '375.55',
            Profit: '$4.17',
            details: [
                { direction: 'BUY', quantity: '375.55', commission: '0.61', link: 'https://bscscan.com/tx/0x6e341f43aee61bc4220fe039076240b3bb7399c78509f7663fce831e001ad35b' },
                { direction: 'SELL', quantity: '380.54', commission: '0.21', link: 'https://bscscan.com/tx/0x273e182ad2d2c12ae651e8e2e8daa4e9cd38d2b4e36b8a5c17592831d6146dd4' },
            ],
        },
        {
            Datetime: '27.01.24 05:34:45',
            Active: 'KitKat',
            BaseActive: 'WBNB',
            Amount: '56.88',
            Profit: '$2.58',
            details: [
                { direction: 'BUY', quantity: '56.88', commission: '0.31', link: 'https://bscscan.com/tx/0xf2d21134ce6244090aefc7586010b64c0eba84d5399a99c91ccfa007686c99ea' },
                { direction: 'SELL', quantity: '59.85', commission: '0.08', link: 'https://bscscan.com/tx/0xd246a7a9148892651cd5ada5642794defed9d0e379daa730cf1b140c570d6c0c' },
            ],
        },




        {
            Datetime: '26.01.24 10:28:49',
            Active: 'Everdome',
            BaseActive: 'WBNB',
            Amount: '1595.11',
            Profit: '$18.76',
            details: [
                { direction: 'BUY', quantity: '1595.11', commission: '1.97', link: 'https://bscscan.com/tx/0x8049a6cafeacde354b65b980fa9131ff7876cc1bdceb269b5d3c840beed2e979' },
                { direction: 'SELL', quantity: '1615.92', commission: '0.08', link: 'https://bscscan.com/tx/0xe259fda1a9a335c73910a437d92b145ba6e428fc142daacf10680a5712cc16b1' },
            ],
        },
        {
            Datetime: '26.01.24 06:01:28',
            Active: 'Scrolly the map',
            BaseActive: 'WBNB',
            Amount: '3743.78',
            Profit: '$178.5',
            details: [
                { direction: 'BUY', quantity: '3743.78', commission: '0.15', link: 'https://bscscan.com/tx/0xdc95a4ab070edeefcce31680774de8e5b7215e07834cf8392bbef86812f1d8aa' },
                { direction: 'SELL', quantity: '3922.55', commission: '0.12', link: 'https://bscscan.com/tx/0xb379d3cde6a479d046a598610ac6da28eed81c5ecca36d2d47444e71b008f41b' },
            ],
        },
        {
            Datetime: '26.01.24 05:47:55',
            Active: 'Hanuman Universe Token',
            BaseActive: 'WBNB',
            Amount: '1462.70',
            Profit: '$5.62',
            details: [
                { direction: 'BUY', quantity: '1462.70', commission: '0.64', link: 'https://bscscan.com/tx/0x6947402acfd3b5d0f6aa7fecfd6b17e82f75707b1df9cce2769cb83a84a8217f' },
                { direction: 'SELL', quantity: '1469.05', commission: '0.09', link: 'https://bscscan.com/tx/0x86f00108faaaab4e005b0af11cb7ae31c6d2edcde9b70f3ea7160ec66317596f' },
            ],
        },
        {
            Datetime: '26.01.24 03:30:25',
            Active: 'longzl',
            BaseActive: 'WBNB',
            Amount: '56.84',
            Profit: '$0.51',
            details: [
                { direction: 'BUY', quantity: '56.84', commission: '0.18', link: 'https://bscscan.com/tx/0x8615ed42e7b870ceb6583d2d125a2a8c6c65c8fabd92ebcc31de10cf632a8158' },
                { direction: 'SELL', quantity: '57.75', commission: '0.22', link: 'https://bscscan.com/tx/0xff08fde99087235df229b3a070b968498134624bab24952a8d3c903af2aa1b5e' },
            ],
        },
        {
            Datetime: '26.01.24 02:44:58',
            Active: 'The SIMPSONS BNB',
            BaseActive: 'WBNB',
            Amount: '175.66',
            Profit: '$20.4',
            details: [
                { direction: 'BUY', quantity: '175.66', commission: '2.16', link: 'https://bscscan.com/tx/0x24cfde02083737b2250e5631a6514637cb393ab50c3a22140c9637e7d8475749' },
                { direction: 'SELL', quantity: '198.33', commission: '0.11', link: 'https://bscscan.com/tx/0x2e13b2b9eb9e805e82cd2856a4d3376e595f98870ec701dca407fc44e80c3f1c' },
            ],
        },
        {
            Datetime: '26.01.24 12:56:19',
            Active: 'ClinTex CTI',
            BaseActive: 'WBNB',
            Amount: '139.43',
            Profit: '$1.6',
            details: [
                { direction: 'BUY', quantity: '139.43', commission: '0.23', link: 'https://bscscan.com/tx/0xc960f06b3a6b8a9a6824f10565c4f33c471f89f04146cbfdde02e28d556302ef' },
                { direction: 'SELL', quantity: '141.36', commission: '0.10', link: 'https://bscscan.com/tx/0xc960f06b3a6b8a9a6824f10565c4f33c471f89f04146cbfdde02e28d556302ef' },
            ],
        },
        {
            Datetime: '26.01.24 12:55:55',
            Active: 'Meta Doge',
            BaseActive: 'WBNB',
            Amount: '159.86',
            Profit: '$3.49',
            details: [
                { direction: 'BUY', quantity: '159.86', commission: '0.41', link: 'https://bscscan.com/tx/0x734a759c6a982d1f23b30ec4f7bce142eb50959fe29bf1e130a6cd4603cec6c4' },
                { direction: 'SELL', quantity: '163.84', commission: '0.08', link: 'https://bscscan.com/tx/0x4d0ecc754ad03b1d30df892622e405794c933f3d19a4e5f6eaa05304794de476' },
            ],
        },
        {
            Datetime: '26.01.24 10:36:26',
            Active: 'StarWallets Token',
            BaseActive: 'WBNB',
            Amount: '248.32',
            Profit: '$1.78',
            details: [
                { direction: 'BUY', quantity: '248.32', commission: '0.23', link: 'https://bscscan.com/tx/0x3a82dbb882eb48d9183c0f5f2a2b09d4bad10f4ac729391699e14811bb0f5421' },
                { direction: 'SELL', quantity: '250.41', commission: '0.08', link: 'https://bscscan.com/tx/0xe3a32557004d239af0c9324c07aef7712a192edec7b22086b2a9a75cc53f6471' },
            ],
        },
        {
            Datetime: '26.01.24 10:12:46',
            Active: 'Jesus Coin',
            BaseActive: 'WBNB',
            Amount: '39.47',
            Profit: '$3.06',
            details: [
                { direction: 'BUY', quantity: '39.47', commission: '0.39', link: 'https://bscscan.com/tx/0x600e40ddcd8f22364842dc0da0ccf5bad4404f2b214e46b049881d5b4fe36867' },
                { direction: 'SELL', quantity: '43.03', commission: '0.11', link: 'https://bscscan.com/tx/0x648ef699c135ba331be360b2125b23e96249bc2123c6c7ef94049da4e54d61d7' },
            ],
        },
        {
            Datetime: '26.01.24 09:01:09',
            Active: 'KiloEx',
            BaseActive: 'WBNB',
            Amount: '55.93',
            Profit: '$1.95',
            details: [
                { direction: 'BUY', quantity: '55.93', commission: '0.25', link: 'https://bscscan.com/tx/0xeeffc2bd541ada113bff065807acac23950420f3e652653ee4dd260f7147b9b7' },
                { direction: 'SELL', quantity: '58.21', commission: '0.08', link: 'https://bscscan.com/tx/0x78c7ce168e71559ad68eef6ab5513f7f1149d3e2509913c1893163b2a795f941' },
            ],
        },
        {
            Datetime: '26.01.24 04:19:03',
            Active: 'BMW',
            BaseActive: 'WBNB',
            Amount: '31.80',
            Profit: '$8.32',
            details: [
                { direction: 'BUY', quantity: '31.80', commission: '0.91', link: 'https://bscscan.com/tx/0x1d62f774779e661f3a2c7b7d8e85683615fcab8a2fd68b453c19de6fdf8aa9c2' },
                { direction: 'SELL', quantity: '41.11', commission: '0.08', link: 'https://bscscan.com/tx/0x48db84f7ec50418bd99f2d67ddd6606dc573d4f5b8a9d34d611deac696968249' },
            ],
        },
        {
            Datetime: '26.01.24 03:49:44',
            Active: 'StarWallets Token',
            BaseActive: 'WBNB',
            Amount: '665.31',
            Profit: '$4.57',
            details: [
                { direction: 'BUY', quantity: '665.31', commission: '3.78', link: 'https://bscscan.com/tx/0xe75ca93794d4dc3be68a2a223b67f2948f849e0e3d62f15fb2f7c682da897082' },
                { direction: 'SELL', quantity: '673.74', commission: '0.08', link: 'https://bscscan.com/tx/0x67485e2fd42f5dacf176501d541b75a46327bc2f7cece259a2a24fb1faad1a92' },
            ],
        },
        {
            Datetime: '26.01.24 03:25:22',
            Active: 'Binance-Peg USD Coin',
            BaseActive: 'WBNB',
            Amount: '3799.68',
            Profit: '$2.33',
            details: [
                { direction: 'BUY', quantity: '3799.68', commission: '0.09', link: 'https://bscscan.com/tx/0x8e14696be9e835a656fe077b51aaa2dc0df91c58705674181b855cdf643de420' },
                { direction: 'SELL', quantity: '3802.19', commission: '0.09', link: 'https://bscscan.com/tx/0x31473af2bdbac94d9f74036300bdf95ec66aadd682782a89938f94affdcaeea2' },
            ],
        },
        {
            Datetime: '26.01.24 02:34:10',
            Active: 'longzl',
            BaseActive: 'WBNB',
            Amount: '69.18',
            Profit: '$1.76',
            details: [
                { direction: 'BUY', quantity: '69.18', commission: '0.32', link: 'https://bscscan.com/tx/0xc88d4352f567ad375b90889cd3b66c7a3633619a0d787201866b4ae72c23413c' },
                { direction: 'SELL', quantity: '71.44', commission: '0.18', link: 'https://bscscan.com/tx/0x5567274ff3d1101d490dc726fe1cd143da2532f641520e116e42c3bfcc1565cf' },
            ],
        },




        {
            Datetime: '25.01.24 06:34:01',
            Active: 'Radr2.0',
            BaseActive: 'WBNB',
            Amount: '844.51',
            Profit: '$17.75',
            details: [
                { direction: 'BUY', quantity: '844.51', commission: '2.33', link: 'https://bscscan.com/tx/0xf4fd6b6edd0713152a05b178f57242af722ef534bbfce4ff64cf52837db9c350' },
                { direction: 'SELL', quantity: '866.51', commission: '1.92', link: 'https://bscscan.com/tx/0x546c73d8b2b6442d581f8d1e290fe8df9d83b52feaf9baaf3a79a646957778e5' },
            ],
        },
        {
            Datetime: '25.01.24 06:15:28',
            Active: 'Hydra',
            BaseActive: 'WBNB',
            Amount: '872.72',
            Profit: '$4.87',
            details: [
                { direction: 'BUY', quantity: '872.72', commission: '2.45', link: 'https://bscscan.com/tx/0xc162b1ab8bd46efe26e590b4f89a3bde7c9e3b0a12936f86ae3896c926abe113' },
                { direction: 'SELL', quantity: '880.13', commission: '0.09', link: 'https://bscscan.com/tx/0x5b2fb938d364617c9e0d169c88c9428c39d66d44ad5b1264f0c779ad088a9f22' },
            ],
        },

        {
            Datetime: '25.01.24 05:02:47',
            Active: 'DOGEMOON',
            BaseActive: 'WBNB',
            Amount: '235.62',
            Profit: '$16.51',
            details: [
                { direction: 'BUY', quantity: '235.62', commission: '1.84', link: 'https://bscscan.com/tx/0x5123c46cd1a05e30cc409f6334959c4cd1cce7b735861c194251811711705062' },
                { direction: 'SELL', quantity: '254.33', commission: '0.36', link: 'https://bscscan.com/tx/0xb8b69599fae692ee8846ec8d0f40a8cd438398a321eab36eaf0fe1d18547261b' },
            ],
        },
        {
            Datetime: '25.01.24 04:24:51',
            Active: 'JiaoZi',
            BaseActive: 'WBNB',
            Amount: '547.14',
            Profit: '$86.76',
            details: [
                { direction: 'BUY', quantity: '547.14', commission: '7.83', link: 'https://bscscan.com/tx/0x7fc8f30b71fe8b36fa7dc45e6dd60a83b487ccadcacce1d52fd35fd93df25079' },
                { direction: 'SELL', quantity: '641.86', commission: '0.13', link: 'https://bscscan.com/tx/0xbd966f640953ad81ec38a486f3114f7293c884e7cbfb156111d7b38b6371ab00' },
            ],
        },
        {
            Datetime: '25.01.24  03:19:57',
            Active: 'JiaoZi',
            BaseActive: 'WBNB',
            Amount: '289.71',
            Profit: '$0.5',
            details: [
                { direction: 'BUY', quantity: '289.71', commission: '2.87', link: 'https://bscscan.com/tx/0x99d51933f61d75002fba3a3fb772436bf0a385693415af27e7b6e646909648d2' },
                { direction: 'SELL', quantity: '293.21', commission: '0.13', link: 'https://bscscan.com/tx/0x0a06308ee5365f63d01e60789b2e340ddcf4d5114fac2bea1bb0777254e1afe2' },
            ],
        },
        {
            Datetime: '25.01.24 03:19:36',
            Active: 'DUEL',
            BaseActive: 'WBNB',
            Amount: '227.18',
            Profit: '$1.59',
            details: [
                { direction: 'BUY', quantity: '227.18', commission: '0.23', link: 'https://bscscan.com/tx/0xbef891a0b2e401b148f5ae646f68e036aa118abb4331543fad2d2aff0e5b77e3' },
                { direction: 'SELL', quantity: '229.08', commission: '0.08', link: 'https://bscscan.com/tx/0xe5445df2d7cf7173937dadcddd72e44156a6a56f1ddc557e44d9e41018691192' },
            ],
        },
        {
            Datetime: '25.01.24 01:51:56',
            Active: 'BabyBurn',
            BaseActive: 'WBNB',
            Amount: '247.40',
            Profit: '$1.19',
            details: [
                { direction: 'BUY', quantity: '247.40', commission: '0.17', link: 'https://bscscan.com/tx/0xdcc223cfd7685484604ceded3709aef2afd052fbd7b3b98308e58cec25a9f79a' },
                { direction: 'SELL', quantity: '248.92', commission: '0.16', link: 'https://bscscan.com/tx/0xb991b778235201764cc3e329b7f0eb0fa46c1df1f6fff340e81432bdc0b1a5ed' },
            ],
        },
        {
            Datetime: '25.01.24 01:41:44',
            Active: 'longzl',
            BaseActive: 'WBNB',
            Amount: '99.89',
            Profit: '$2.6',
            details: [
                { direction: 'BUY', quantity: '99.89', commission: '0.44', link: 'https://bscscan.com/tx/0x89a14769890ef4ca16be8b1614be02289feb850e153549613ed955aa32ddc42c' },
                { direction: 'SELL', quantity: '103.15', commission: '0.22', link: 'https://bscscan.com/tx/0xb6e5b86c17664d5c05275e508e8dc495c22655a069b730764a497b47841f345e' },
            ],
        },
        {
            Datetime: '25.01.24 12:50:25',
            Active: 'JiaoZi',
            BaseActive: 'WBNB',
            Amount: '168.87',
            Profit: '$2.81',
            details: [
                { direction: 'BUY', quantity: '168.87', commission: '0.38', link: 'https://bscscan.com/tx/0xdc5d8f5f23bf7ba961e906a840769c2d1d0a608dcbbd3975035b823f192be7d9' },
                { direction: 'SELL', quantity: '172.19', commission: '0.13', link: 'https://bscscan.com/tx/0x3025a09c10fa8661dc3daf498289d2c7644c34011122650ded0fadac5f8a18d2' },
            ],
        },
        {
            Datetime: '25.01.24 12:44:55',
            Active: 'NFTB',
            BaseActive: 'WBNB',
            Amount: '867.62',
            Profit: '$2.88',
            details: [
                { direction: 'BUY', quantity: '867.62', commission: '0.34', link: 'https://bscscan.com/tx/0xb745cc6a0bef76c54f62f28b45571602f0196182b06cca0f1a162eb2cdc8b61a' },
                { direction: 'SELL', quantity: '870.92', commission: '0.08', link: 'https://bscscan.com/tx/0x3127d8427b2e15256b2facff0be206457615e941c2d3d42146cf45747ddb479a' },
            ],
        },
        {
            Datetime: '25.01.24 12:39:25',
            Active: 'Any Inu',
            BaseActive: 'WBNB',
            Amount: '29.04',
            Profit: '$1.72',
            details: [
                { direction: 'BUY', quantity: '29.04', commission: '0.08', link: 'https://bscscan.com/tx/0xf2721363279cc7ea0fc459888b47bb1059221e0df1f984df70aaf2e8e402090e' },
                { direction: 'SELL', quantity: '30.93', commission: '0.09', link: 'https://bscscan.com/tx/0x13b3aa4ce5796bca7818515f328ad5612ac535d0c7c85f4d342bb9a62022b1df' },
            ],
        },
        {
            Datetime: '25.01.24 10:25:43',
            Active: 'JiaoZi',
            BaseActive: 'WBNB',
            Amount: '267.63',
            Profit: '$2.24',
            details: [
                { direction: 'BUY', quantity: '267.63', commission: '0.32', link: 'https://bscscan.com/tx/0x29c5c3fb926d468b19aeec2ac352c35559dc4b252cc4e0a899e9c3108b5982b1' },
                { direction: 'SELL', quantity: '270.32', commission: '0.13', link: 'https://bscscan.com/tx/0x2f1b3f41ab2ca7708293881f46add29e14fd163cb7bacda290986018afe4eff7' },
            ],
        },
        {
            Datetime: '25.01.24 09:19:46',
            Active: 'shelling',
            BaseActive: 'WBNB',
            Amount: '187.71',
            Profit: '$0.4',
            details: [
                { direction: 'BUY', quantity: '187.71', commission: '0.09', link: 'https://bscscan.com/tx/0x3ee8c6c2945b568afddd852824cf9ced329f30f56eef9a66f2d28bd7f8bca18a' },
                { direction: 'SELL', quantity: '188.28', commission: '0.08', link: 'https://bscscan.com/tx/0x675561c418f9d9970354a775cdc59cfed0f266cf60ca469d6ac090132b81e137' },
            ],
        },

        {
            Datetime: '25.01.24 06:30:31',
            Active: 'GoMining Token',
            BaseActive: 'WBNB',
            Amount: '3462.22',
            Profit: '$4.81',
            details: [
                { direction: 'BUY', quantity: '3462.22', commission: '0.25', link: 'https://bscscan.com/tx/0xdbc68591a004d8891df279426f5c742dd2dc853608950d04e203236cf73d555b' },
                { direction: 'SELL', quantity: '3467.54', commission: '0.26', link: 'https://bscscan.com/tx/0xb3c0a3ebe06d435a72674bd7bc80db3b6932454e1531916b38e152bcb8312c69' },
            ],
        },
        {
            Datetime: '25.01.24 06:19:03',
            Active: 'The HUSL [via ChainPort.io]',
            BaseActive: 'WBNB',
            Amount: '115.69',
            Profit: '$1.93',
            details: [
                { direction: 'BUY', quantity: '115.69', commission: '0.25', link: 'https://bscscan.com/tx/0x758e93f490706a038b5ede639b435129d153f724e29ccf66349e6b29b81b3983' },
                { direction: 'SELL', quantity: '117.95', commission: '0.08', link: 'https://bscscan.com/tx/0x99a08ccf47193a123a2d81af10bf08694282c26b9ac946eb8558ce24b583a550' },
            ],
        },
        {
            Datetime: '25.01.24 12:57:32',
            Active: 'smol cat',
            BaseActive: 'WBNB',
            Amount: '152.60',
            Profit: '$4.67',
            details: [
                { direction: 'BUY', quantity: '152.60', commission: '0.60', link: 'https://bscscan.com/tx/0x878f8a54674076e2f7e6683a2b7a70b5949a12bee5972b24e37c001b611074d6' },
                { direction: 'SELL', quantity: '158.00', commission: '0.13', link: 'https://bscscan.com/tx/0xa4c5bf4d36ae2d11058860c6e9f5332907d31696f2249c99e0936f5b6c672c3b' },
            ],
        },




        {
            Datetime: '24.01.24 09:44:04',
            Active: 'Bitonite',
            BaseActive: 'WBNB',
            Amount: '291.16',
            Profit: '$16.26',
            details: [
                { direction: 'BUY', quantity: '291.16', commission: '0.11', link: 'https://bscscan.com/tx/0x3d7fe5c0474858a2cbdb53feb631359b5f1b456968385da2fff77f516838d7a3' },
                { direction: 'SELL', quantity: '307.62', commission: '0.09', link: 'https://bscscan.com/tx/0xa727358464f7c773ec8c91d4d92a1a115edbbe8d9df0c82b5586972c9b4a6e0d' },
            ],
        },
        {
            Datetime: '24.01.24 08:30:43',
            Active: 'DexFlow',
            BaseActive: 'WBNB',
            Amount: '275.12',
            Profit: '$0.92',
            details: [
                { direction: 'BUY', quantity: '275.12', commission: '0.15', link: 'https://bscscan.com/tx/0xc2c2f3ee748a741509fa06a41bb230bf91c3e05908c5e05d45194dd97099aec4' },
                { direction: 'SELL', quantity: '276.28', commission: '0.09', link: 'https://bscscan.com/tx/0x395dcfaffb40b9618c7bbdb3eacf4c2a404e4ca91b41150824f2cf38cd0a3be4' },
            ],
        },
        {
            Datetime: '24.01.24 06:59:21',
            Active: 'HuaHua',
            BaseActive: 'WBNB',
            Amount: '761.26',
            Profit: '$68.57',
            details: [
                { direction: 'BUY', quantity: '761.26', commission: '6.93', link: 'https://bscscan.com/tx/0x9cae01efbe6018812a7a994c279f79eca34989baa91364007e76f7cdf6ceadc9' },
                { direction: 'SELL', quantity: '836.88', commission: '0.12', link: 'https://bscscan.com/tx/0xe928be06d75ee158a39a708c1391f4452b99d067c5493b3cf6b8dc8f46b11f13' },
            ],
        },
        {
            Datetime: '24.01.24 06:57:03',
            Active: 'Pepe Montana AI',
            BaseActive: 'WBNB',
            Amount: '122.60',
            Profit: '$0.06',
            details: [
                { direction: 'BUY', quantity: '122.60', commission: '2.88', link: 'https://bscscan.com/tx/0x779d08ab71a59641c4754347ce98cd121a83d993d735b7a00b75bc7c6f3b6fa1' },
                { direction: 'SELL', quantity: '125.66', commission: '0.12', link: 'https://bscscan.com/tx/0x716cc17f4f33422b508744837b8b2cb73bc8af35c040e1a9f63d245eded3d934' },
            ],
        },
        {
            Datetime: '24.01.24 06:36:39',
            Active: 'RageOnWheels',
            BaseActive: 'WBNB',
            Amount: '1399.42',
            Profit: '$34.04',
            details: [
                { direction: 'BUY', quantity: '1399.42', commission: '3.54', link: 'https://bscscan.com/tx/0xf9a41c6b68d6cb89f4701fc1e238d90d3e63ad93d7bdfcfc5e0af10e66d1cf90' },
                { direction: 'SELL', quantity: '1437.08', commission: '0.08', link: 'https://bscscan.com/tx/0x1207b9e43ad04dc6a773c8ab8d4e2bd43f40563325c4f85b3e40265695855736' },
            ],
        },
        {
            Datetime: '24.01.24 06:28:33',
            Active: 'Fayda',
            BaseActive: 'WBNB',
            Amount: '54.10',
            Profit: '$4.44',
            details: [
                { direction: 'BUY', quantity: '54.10', commission: '0.09', link: 'https://bscscan.com/tx/0x67b3f9301cd01101302a9ec3ec3107f660362cb57fe2dae96995fc7f6b0dba68' },
                { direction: 'SELL', quantity: '58.72', commission: '0.09', link: 'https://bscscan.com/tx/0x19f8ff341c824fe07de5f60dd23b093502821aa2019307837e3b4c3c2a95cc22' },
            ],
        },
        {
            Datetime: '24.01.24 06:27:09',
            Active: 'AIPAD.tech',
            BaseActive: 'WBNB',
            Amount: '524.12',
            Profit: '$5.16',
            details: [
                { direction: 'BUY', quantity: '524.12', commission: '0.64', link: 'https://bscscan.com/tx/0x25bf4f0143ee4d977daa097e99a71fe0307e78a454ff31efda185fd305dbf166' },
                { direction: 'SELL', quantity: '530.03', commission: '0.11', link: 'https://bscscan.com/tx/0xc2a96a50bf0793fb58a8e8ebf7b8a92c3acdade82ee3c3994fb6b06474fb7293' },
            ],
        },
        {
            Datetime: '24.01.24 06:01:54',
            Active: 'ZILLION AAKAR XO',
            BaseActive: 'WBNB',
            Amount: '43.95',
            Profit: '$3.6',
            details: [
                { direction: 'BUY', quantity: '43.95', commission: '0.55', link: 'https://bscscan.com/tx/0x89c7609df699d424a4443cee8c8e8bec0aba53615a5e1afae1b01cd88e6a6b9b' },
                { direction: 'SELL', quantity: '48.36', commission: '0.26', link: 'https://bscscan.com/tx/0xd73d5b16a999e89f46b4f89c61ed49a13632cf907984948b19306a859dc37a40' },
            ],
        },
        {
            Datetime: '24.01.24 05:51:48',
            Active: 'Cogito Governance',
            BaseActive: 'WBNB',
            Amount: '793.6',
            Profit: '$4.45',
            details: [
                { direction: 'BUY', quantity: '793.6', commission: '0.51', link: 'https://bscscan.com/tx/0x3358aa11cf19342aacad933df1c47a8bb9b14b6c70dff1af0acdc1ae4e397ebe' },
                { direction: 'SELL', quantity: '798.65', commission: '0.09', link: 'https://bscscan.com/tx/0xa676e2bc1b11672383f4411e2972a04e94fbad16cf8be33300cb0162eafcc1ec' },
            ],
        },
        {
            Datetime: '24.01.24 04:30:02',
            Active: 'Grok 1.5',
            BaseActive: 'WBNB',
            Amount: '387.86',
            Profit: '$19.27',
            details: [
                { direction: 'BUY', quantity: '387.86', commission: '2.02', link: 'https://bscscan.com/tx/0x609e30e24c67b8261a80d87ff9327c24ef13c2770b0d892ad165f710ef4c1dce' },
                { direction: 'SELL', quantity: '409.23', commission: '0.08', link: 'https://bscscan.com/tx/0x68e61d849ef53187c8eff7b022fd8bb9bf0271a428c73d84422c3d3323458793' },
            ],
        },
        {
            Datetime: '24.01.24 04:24:47',
            Active: 'ApplePies.co',
            BaseActive: 'WBNB',
            Amount: '47.73',
            Profit: '$0.83',
            details: [
                { direction: 'BUY', quantity: '47.73', commission: '0.14', link: 'https://bscscan.com/tx/0x401d46e36146380014a6d02ec58b2d8152dc4c7adbea49f2c673869b1e88fd11' },
                { direction: 'SELL', quantity: '48.78', commission: '0.08', link: 'https://bscscan.com/tx/0xe64cee625ac54bc6343165a022aee31df1922f56748929732a558f64d344e87a' },
            ],
        },
        {
            Datetime: '24.01.24 03:33:35',
            Active: 'PIG9',
            BaseActive: 'WBNB',
            Amount: '314.51',
            Profit: '$1.7',
            details: [
                { direction: 'BUY', quantity: '314.51', commission: '0.30', link: 'https://bscscan.com/tx/0xaad1e2e4788f097e22d095c623a21fcfb87f275e1e0eb605dd993e1b86764cef' },
                { direction: 'SELL', quantity: '316.68', commission: '0.17', link: 'https://bscscan.com/tx/0x51db1d81aacc47206a885036a9ff493830047781655d36ef076f222514dd8dc1' },
            ],
        },
        {
            Datetime: '24.01.24 03:23:08',
            Active: 'The HUSL [via ChainPort.io] ',
            BaseActive: 'WBNB',
            Amount: '115.93',
            Profit: '$0.09',
            details: [
                { direction: 'BUY', quantity: '115.93', commission: '1.82', link: 'https://bscscan.com/tx/0x9c0ff2e2f4ef5ee5252d12014a03a880652a8479eefbf85e0dc5fcf453c60683' },
                { direction: 'SELL', quantity: '117.92', commission: '0.08', link: 'https://bscscan.com/tx/0x1be463ce4a0eafdb45e8523e9f65ccbd254c11a6a3c621005a1d63b0cb1a66b5' },
            ],
        },
        {
            Datetime: '24.01.24 03:18:59',
            Active: 'Dragon2024',
            BaseActive: 'WBNB',
            Amount: '1077.25',
            Profit: '$5.06',
            details: [
                { direction: 'BUY', quantity: '1077.25', commission: '0.59', link: 'https://bscscan.com/tx/0xf229016f4473012f6de509f4226f0644ac3522b480208d26c5a8e364ca858fb9' },
                { direction: 'SELL', quantity: '1083.18', commission: '0.28', link: 'https://bscscan.com/tx/0xb9877b498199bd9bc602e58c8fadd8057190d47f68266ef30ea6dd27b2b58bc1' },
            ],
        },
        {
            Datetime: '24.01.24 02:24:38',
            Active: 'AMF Token',
            BaseActive: 'WBNB',
            Amount: '121.23',
            Profit: '$0.81',
            details: [
                { direction: 'BUY', quantity: '121.23', commission: '4.82', link: 'https://bscscan.com/tx/0x35c128b456c742a7a36a456bf799a0d8d6603b5ab9f14b231350466e15755ab7' },
                { direction: 'SELL', quantity: '126.94', commission: '0.08', link: 'https://bscscan.com/tx/0x598114571a613719ec4e6c0d3ca6de3bf0220f461f825e5d7283162b72cfb163' },
            ],
        },
        {
            Datetime: '24.01.24 01:49:34',
            Active: 'MARS',
            BaseActive: 'WBNB',
            Amount: '3136.58',
            Profit: '$24.58',
            details: [
                { direction: 'BUY', quantity: '3136.58', commission: '0.28', link: 'https://bscscan.com/tx/0x0b5b7959d1d09d679dd723f35f8f469314c2a91c0a1dc97fec65e261f7aa6bc1' },
                { direction: 'SELL', quantity: '3161.95', commission: '0.51', link: 'https://bscscan.com/tx/0xac4d0d3c2ca6423c82263b8001cd83d9fc729fcccc7a3cd6862d7481286e1123' },
            ],
        },
        {
            Datetime: '24.01.24 12:35:15',
            Active: 'LOL',
            BaseActive: 'WBNB',
            Amount: '193.86',
            Profit: '$7.17',
            details: [
                { direction: 'BUY', quantity: '193.86', commission: '4.89', link: 'https://bscscan.com/tx/0xdde9d7d1587865442280cf8a479e4d1682dedaf3f624456f806516d82579be82' },
                { direction: 'SELL', quantity: '206.00', commission: '0.08', link: 'https://bscscan.com/tx/0x92c3d601517fd95d543380577e3e707b8294b8e546644c4fd322a9dd5c2d0019' },
            ],
        },
        {
            Datetime: '24.01.24 11:40:38',
            Active: 'WeWay Token',
            BaseActive: 'WBNB',
            Amount: '200.68',
            Profit: '$1.65',
            details: [
                { direction: 'BUY', quantity: '200.68', commission: '3.68', link: 'https://bscscan.com/tx/0x8eed8beb5bec2cc199e199f031542b244b1f672000b274184e67e9cef4bb0f7c' },
                { direction: 'SELL', quantity: '206.10', commission: '0.09', link: 'https://bscscan.com/tx/0x4a9b008fb8c34c4f05a079866276a02b9d30187df95dc892f0b1209280e7def8' },
            ],
        },
        {
            Datetime: '24.01.24 10:19:24',
            Active: 'IceToken',
            BaseActive: 'WBNB',
            Amount: '857.99',
            Profit: '$1.55',
            details: [
                { direction: 'BUY', quantity: '857.99', commission: '0.09', link: 'https://bscscan.com/tx/0x04916b33e523bb77330d782bd42601f0b5a6f2ebaca1abde45144712027eca8e' },
                { direction: 'SELL', quantity: '859.71', commission: '0.08', link: 'https://bscscan.com/tx/0xad24be45bd5ca6b2f4d3b169040db58303b709bfdb0f651794c9822acbd21caa' },
            ],
        },
        {
            Datetime: '24.01.24 10:14:09',
            Active: 'JiaoZi',
            BaseActive: 'WBNB',
            Amount: '169.83',
            Profit: '$1.48',
            details: [
                { direction: 'BUY', quantity: '169.83', commission: '0.24', link: 'https://bscscan.com/tx/0x348e3a5c2caf5ec1add066d4764fe1a840636b07d07ddaf30002f0637b2da239' },
                { direction: 'SELL', quantity: '171.68', commission: '0.13', link: 'https://bscscan.com/tx/0xca048c5b48647e9c980ebc2e1bbef2d0409bc9a513dcec8107390f428ff55dca' },
            ],
        },
        {
            Datetime: '24.01.24 09:06:53',
            Active: 'Fayda',
            BaseActive: 'WBNB',
            Amount: '1157.55',
            Profit: '$4.83',
            details: [
                { direction: 'BUY', quantity: '1157.55', commission: '0.56', link: 'https://bscscan.com/tx/0x11fbc490274c2cb47130d33b9f8d71f50a958dd16cd6ec903c3cb8a9aad52188' },
                { direction: 'SELL', quantity: '1163.03', commission: '0.09', link: 'https://bscscan.com/tx/0x77ed28b0484d5c8765053c79f8c2dbc96320d111a7455344dc0d50f12c215a6e' },
            ],
        },
        {
            Datetime: '24.01.24 08:38:54',
            Active: 'PLANET',
            BaseActive: 'WBNB',
            Amount: '277.75',
            Profit: '$4.43',
            details: [
                { direction: 'BUY', quantity: '277.75', commission: '0.51', link: 'https://bscscan.com/tx/0x11fe6648dffbf07b5c31c167990a0467c35783b86f669b21abac8ffefb231f52' },
                { direction: 'SELL', quantity: '282.79', commission: '0.10', link: 'https://bscscan.com/tx/0x350bcc7e39b6028714f88a3634ba4599c24e038044e309fd2b9592bf2400ed39' },
            ],
        },
        {
            Datetime: '24.01.24 06:57:12',
            Active: 'longzl',
            BaseActive: 'WBNB',
            Amount: '87.09',
            Profit: '$1.69',
            details: [
                { direction: 'BUY', quantity: '87.09', commission: '0.35', link: 'https://bscscan.com/tx/0xd44f2339d4b010ed03cb79cd8728b512952c428abd68e48adcc08a8f6ac6cbba' },
                { direction: 'SELL', quantity: '89.47', commission: '0.34', link: 'https://bscscan.com/tx/0x26b9415ba849d7d015a38d1c100b79f3685f18023f505ecc0bc13fffa2b28182' },
            ],
        },
        {
            Datetime: '24.01.24 02:06:47',
            Active: 'XL',
            BaseActive: 'WBNB',
            Amount: '295.51',
            Profit: '$7.18',
            details: [
                { direction: 'BUY', quantity: '295.51', commission: '0.93', link: 'https://bscscan.com/tx/0x1f16bf189d01ac3b4f633a28575db9d8a30a358d9bc4cd9d30753c289f45bd0e' },
                { direction: 'SELL', quantity: '304.73', commission: '1.11', link: 'https://bscscan.com/tx/0x31aa9213dc6ac2941e2465f5aa39ba36676b27aa13cbf4ad7ee0a4d9a5705e38' },
            ],
        },
        {
            Datetime: '23.01.24 03:10:42',
            Active: 'TangYuanKing',
            BaseActive: 'WBNB',
            Amount: '86.55',
            Profit: '$7.01',
            details: [
                { direction: 'BUY', quantity: '86.55', commission: '0.98', link: 'https://bscscan.com/tx/0x586133462a91b2203324e5593c8d0862b0ce35b2977e63e315d3feac471580da' },
                { direction: 'SELL', quantity: '95.06', commission: '0.52', link: 'https://bscscan.com/tx/0x0e66e83bf1ac2f820c6160bc15486da3bc064e6f40b914b72d9d2d609f7d43e1' },
            ],
        },
        {
            Datetime: '23.01.24 02:48:48',
            Active: 'Dracarys',
            BaseActive: 'WBNB',
            Amount: '201.94',
            Profit: '$0.06',
            details: [
                { direction: 'BUY', quantity: '201.94', commission: '1.78', link: 'https://bscscan.com/tx/0x4c0c6be25f4590e6437926d5d6b1c254247bf545390b0c17073a4db6ff7f4e3a' },
                { direction: 'SELL', quantity: '203.86', commission: '0.08', link: 'https://bscscan.com/tx/0x38e9319dc4417a7d5e810e2188ed7a87b80dc347f954a06ee59791442f2ead27' },
            ],
        },
        {
            Datetime: '23.01.24 12:54:15',
            Active: 'RageOnWheels',
            BaseActive: 'WBNB',
            Amount: '918.51',
            Profit: '$2.73',
            details: [
                { direction: 'BUY', quantity: '918.51', commission: '0.33', link: 'https://bscscan.com/tx/0x2f91a6eb44b037db58cbc97053dd4b8589873676a0deb044fdf67628df03c7c0' },
                { direction: 'SELL', quantity: '921.65', commission: '0.08', link: 'https://bscscan.com/tx/0xe111c2ca358ae0ac6b53e2a7e86e92cb3b315a7f5d519d2553f43feef435db8d' },
            ],
        },
        {
            Datetime: '23.01.24 12:47:42 ',
            Active: 'Lion Token ',
            BaseActive: 'WBNB',
            Amount: '27.95',
            Profit: '$2.19',
            details: [
                { direction: 'BUY', quantity: '27.95', commission: '0.30', link: 'https://bscscan.com/tx/0x5280643c6dddbe58e29d225163ec908ab1f28d1d3ac18a6e24a9158d84d9c1cc' },
                { direction: 'SELL', quantity: '30.56', commission: '0.12', link: 'https://bscscan.com/tx/0x4b8226d05880c27304471b0070b0f86714848e1d6a9d96614bb147a4101782af' },
            ],
        },


        {
            Datetime: '23.01.24 10:35:16',
            Active: 'Dracarys',
            BaseActive: 'WBNB',
            Amount: '1043.46',
            Profit: '$9.43',
            details: [
                { direction: 'BUY', quantity: '1043.46', commission: '1.03', link: 'https://bscscan.com/tx/0xc13e8e6653bfcda6caece27f7b18c33ba8d24e96877fe4928dae39c289cab3d0' },
                { direction: 'SELL', quantity: '1054.00', commission: '0.08', link: 'https://bscscan.com/tx/0xac2cc30ebba133449aaf68244f59f935ea967983af8da047b408c0fcbabc5a3a' },
            ],
        },
        {
            Datetime: '23.01.24 10:31:10',
            Active: 'Dracarys',
            BaseActive: 'WBNB',
            Amount: '299.84',
            Profit: '$1.82',
            details: [
                { direction: 'BUY', quantity: '299.84', commission: '0.09', link: 'https://bscscan.com/tx/0xca1fb9924ea567cf206bd61f4c7233be0ce1c85b7560b317b2aa4814a4f224a0' },
                { direction: 'SELL', quantity: '301.83', commission: '0.08', link: 'https://bscscan.com/tx/0x95531944e8323d9f49f87d6a96349886033d092702e8ee950e6fa8b882bd0f0b' },
            ],
        },
        {
            Datetime: '23.01.24 09:36:28',
            Active: 'BabyBurn',
            BaseActive: 'WBNB',
            Amount: '153.51',
            Profit: '$2.16',
            details: [
                { direction: 'BUY', quantity: '153.51', commission: '0.28', link: 'https://bscscan.com/tx/0x2aaf9c4f0dbfa5689fd584736daf1f25f6a596391d4fc0747f830fa2a5f3ff27' },
                { direction: 'SELL', quantity: '156.04', commission: '0.09', link: 'https://bscscan.com/tx/0xe506bddc84939eaf069694ac6c49f8f93ba64b3a2dbf4e7e875c916163288e34' },
            ],
        },
        {
            Datetime: '23.01.24 07:33:28',
            Active: 'BabyBurn',
            BaseActive: 'WBNB',
            Amount: '88.53',
            Profit: '$1.23',
            details: [
                { direction: 'BUY', quantity: '88.53', commission: '0.19', link: 'https://bscscan.com/tx/0x71ceccb741659b077ed368d2afe12b37f81113bfe4d9604c46c5904c2d460f81' },
                { direction: 'SELL', quantity: '90.04', commission: '0.09', link: 'https://bscscan.com/tx/0xed1960700a828cbd2e9f7eae2c164036d679fac150316383073275696dd0bf72' },
            ],
        },
        {
            Datetime: '23.01.24 07:27:07',
            Active: 'Baby Minu',
            BaseActive: 'WBNB',
            Amount: '46.16',
            Profit: '$0.39',
            details: [
                { direction: 'BUY', quantity: '46.16', commission: '0.13', link: 'https://bscscan.com/tx/0xd4ec7abcb551b7d4ec8aa35f0db0dc4914bed5de594c5e78fe24a6fdc152d386' },
                { direction: 'SELL', quantity: '46.79', commission: '0.11', link: 'https://bscscan.com/tx/0xa8487c8b3fffc39ef8f78ec64c654598b09dcf17c47054cdfdaf829ccc85fe30' },
            ],
        },
        {
            Datetime: '22.01.24 09:29:18',
            Active: 'BSCS Token',
            BaseActive: 'WBNB',
            Amount: '187.54',
            Profit: '$2.07',
            details: [
                { direction: 'BUY', quantity: '187.54', commission: '0.27', link: 'https://bscscan.com/tx/0x101a37dc39c1f0e3af64614f156df43b3a3fd0a2687b652bc4c6c80c7b1fd7ae' },
                { direction: 'SELL', quantity: '189.97', commission: '0.09', link: 'https://bscscan.com/tx/0x29d53245382a0f12ce98d603620e0e1e0ea94dde42830f91f99335b49a2201cc' },
            ],
        },
        {
            Datetime: '22.01.24 08:24:56',
            Active: 'Atomic Wallet Token',
            BaseActive: 'WBNB',
            Amount: '150.72',
            Profit: '$2.18',
            details: [
                { direction: 'BUY', quantity: '150.72', commission: '0.26', link: 'https://bscscan.com/tx/0x597f327e86fac87e8dd8898b9a3e3e5566cd4b2056c7a27cfbe46cb2e2da7873' },
                { direction: 'SELL', quantity: '153.25', commission: '0.09', link: 'https://bscscan.com/tx/0x803c0f8662ffffac0af1ca693fe1becd14ff7a80c77351a6d68f9db0bed0779d' },
            ],
        },
        {
            Datetime: '22.01.24 07:03:24',
            Active: 'ALTLAYER',
            BaseActive: 'WBNB',
            Amount: '64.17',
            Profit: '$1.63',
            details: [
                { direction: 'BUY', quantity: '64.17', commission: '0.21', link: 'https://bscscan.com/tx/0xce07470e8acadc48ad644e4c3d08fc9cf1d9fdb6e23bd6beca0786a52741368c' },
                { direction: 'SELL', quantity: '66.09', commission: '0.08', link: 'https://bscscan.com/tx/0x4748c67b3703d20bda89385a4bc82e79b63308b7c56e49447b91bd70acad781d' },
            ],
        },
        {
            Datetime: '22.01.24 06:41:31',
            Active: 'Cash Driver',
            BaseActive: 'WBNB',
            Amount: '1.17',
            Profit: '$0.47',
            details: [
                { direction: 'BUY', quantity: '1.17', commission: '0.15', link: 'https://bscscan.com/tx/0x5c63132c86bc4a596f9f6bbe8bacfae3b12debd19519e4b6d80be3d43c68b745' },
                { direction: 'SELL', quantity: '1.92', commission: '0.13', link: 'https://bscscan.com/tx/0x2e8c74b513f0a3d200900c8f6f7bf9cf2025da9b46ac8c511f2b0b7421071a8c' },
            ],
        },




        {
            Datetime: '22.01.24 05:46:59 ',
            Active: 'TRUMP',
            BaseActive: 'WBNB',
            Amount: '483.76',
            Profit: '$7.48',
            details: [
                { direction: 'BUY', quantity: '483.76', commission: '0.79', link: 'https://bscscan.com/tx/0xe100148580148dd63b253519eaa26a5a5a8b54575f90008d85f54816a87f9758' },
                { direction: 'SELL', quantity: '492.11', commission: '0.08', link: 'https://bscscan.com/tx/0xe9de9c1d70637690b534b0b36f3c009d09af89ab74bf871acce0bfa533fa62f3' },
            ],
        },
        {
            Datetime: '22.01.24 03:24:07',
            Active: 'Mango Man Intelligent',
            BaseActive: 'WBNB',
            Amount: '657.93',
            Profit: '$1.63',
            details: [
                { direction: 'BUY', quantity: '657.93', commission: '0.23', link: 'https://bscscan.com/tx/0x5b2b537bffcd05cac3f214c8db84e9e552510f6457fc9ca8fa3d5b889457494b' },
                { direction: 'SELL', quantity: '659.88', commission: '0.09', link: 'https://bscscan.com/tx/0xb562ddfd802a43d85ade7317feba8f9ac515e75e00fcc507e06a032898eb99d1' },
            ],
        },
        {
            Datetime: '22.01.24 03:05:46',
            Active: 'FomoFi ',
            BaseActive: 'WBNB',
            Amount: '2957.40',
            Profit: '$21.4',
            details: [
                { direction: 'BUY', quantity: '2957.40', commission: '2.34', link: 'https://bscscan.com/tx/0x1110891f3b812e32827197159a1ccd8e51bf0d450dfc2a3c84b31f0b0da02a03' },
                { direction: 'SELL', quantity: '2981.43', commission: '0.29', link: 'https://bscscan.com/tx/0xb940e8afd00ad06c8d47e18e231ec5681b8b679ee5b6be4485261e9565d219b1' },
            ],
        },
        {
            Datetime: '22.01.24 03:01:52',
            Active: 'TRICERATOPS ',
            BaseActive: 'WBNB',
            Amount: '383.06',
            Profit: '$4.11',
            details: [
                { direction: 'BUY', quantity: '383.06', commission: '0.46', link: 'https://bscscan.com/tx/0x4c98c92542616ff31c2605ae1a9002c6b6f7098053e645015deb5b9d596e5b13' },
                { direction: 'SELL', quantity: '387.72', commission: '0.09', link: 'https://bscscan.com/tx/0xf4d03b3fb27bb7ff279435e6ba9462340c1afef9d4f9c73811e0b0dc399d3540' },
            ],
        },
        {
            Datetime: '22.01.24 01:54:21',
            Active: 'CVIP ',
            BaseActive: 'WBNB',
            Amount: '2167.96',
            Profit: '$190.71',
            details: [
                { direction: 'BUY', quantity: '2167.96', commission: '17.54', link: 'https://bscscan.com/tx/0xdf189c8bfc49b8b68a65c2e36138ddfa0590e59ac686717c42658def4ff5a34f' },
                { direction: 'SELL', quantity: '2376.29', commission: '0.08', link: 'https://bscscan.com/tx/0x3290dd1ab9c010fd76e730ab4ae7c4777f7ba981a816458d05ceb3956cae2ffe' },
            ],
        },
        {
            Datetime: '22.01.24 09:00:16',
            Active: 'Spintop ',
            BaseActive: 'WBNB',
            Amount: '783.08',
            Profit: '$9.98',
            details: [
                { direction: 'BUY', quantity: '783.08', commission: '1.06', link: 'https://bscscan.com/tx/0x2bf521f7761c5743763d96b5e949394a2b8d141c809ad4763858357ed5aad2fd' },
                { direction: 'SELL', quantity: '794.21', commission: '0.09', link: 'https://bscscan.com/tx/0x8b82199f710ac7c606278c661d6161d27b76b4faba88ec2ca421854397a5ff7b' },
            ],
        },
        {
            Datetime: '22.01.24 08:08:57',
            Active: 'BabyBurn ',
            BaseActive: 'WBNB',
            Amount: '203.18',
            Profit: '$8',
            details: [
                { direction: 'BUY', quantity: '203.18', commission: '0.88', link: 'https://bscscan.com/tx/0xe9a16e1c38ab5443318bb5828d6099063d5ca5e4b806837762aae7c5efe5c394' },
                { direction: 'SELL', quantity: '212.16', commission: '0.10', link: 'https://bscscan.com/tx/0x00d8a68fde31f23f96a47f4cec30828d4e3c3442c6bfd8812786632b2571870a' },
            ],
        },
        {
            Datetime: '22.01.24 08:01:02',
            Active: 'BabyBurn ',
            BaseActive: 'WBNB',
            Amount: '1531.34',
            Profit: '$17.58',
            details: [
                { direction: 'BUY', quantity: '1531.34', commission: '1.85', link: 'https://bscscan.com/tx/0x6a92aa1c6ab8d55abad789a3cbc60d1fa0f509129edfb46090f55091f60bde55' },
                { direction: 'SELL', quantity: '1550.87', commission: '0.10', link: 'https://bscscan.com/tx/0x8eaa4f1db0ed68f2f195ca746e704d95a7fcc134ab30c3bd8d5102e8f96e5b13' },
            ],
        },
        {
            Datetime: '22.01.24 07:18:59',
            Active: 'VEVE ',
            BaseActive: 'WBNB',
            Amount: '281.11',
            Profit: '$4.84',
            details: [
                { direction: 'BUY', quantity: '281.11', commission: '0.57', link: 'https://bscscan.com/tx/0x2fbec46c964bc9fba1913e95565a01f22731e654c550e071f990cb978e53e94f' },
                { direction: 'SELL', quantity: '286.81', commission: '0.29', link: 'https://bscscan.com/tx/0x2e9dcc083b21558b718153bb92b57454c3beb8d495f3eee96a7a6676d588a107' },
            ],
        },
        {
            Datetime: '22.01.24 06:10:33',
            Active: 'Serum ',
            BaseActive: 'WBNB',
            Amount: '0.00',
            Profit: '$8.5',
            details: [
                { direction: 'BUY', quantity: '0.00', commission: '0.12', link: 'https://bscscan.com/tx/0x177c91274f9599d4aa345db163db240e3b415213856573bfa5c9d6b426d3bc7a' },
                { direction: 'SELL', quantity: '8.72', commission: '0.10', link: 'https://bscscan.com/tx/0xe5bdd2aaee1a7a84a1664ec9fb68d8935d7961239516bbeaeae194ab8ef130bb' },
            ],
        },
        {
            Datetime: '22.01.24 05:29:57',
            Active: 'MRBOB ',
            BaseActive: 'WBNB',
            Amount: '53.69',
            Profit: '$1.98',
            details: [
                { direction: 'BUY', quantity: '53.69', commission: '0.26', link: 'https://bscscan.com/tx/0x5420f98fef7e0e7507c5ed28d358eaebdd840433b8dddf3edf2b412a2e3c969d' },
                { direction: 'SELL', quantity: '56.01', commission: '0.08', link: 'https://bscscan.com/tx/0x303ed54b71fa290a2493edbd69125304d3ca9c90f3343943b530d9f5001c9cc9' },
            ],
        },
        {
            Datetime: '19.01.24 10:44:54',
            Active: 'PeePee ',
            BaseActive: 'WBNB',
            Amount: '522.84',
            Profit: '$6.91',
            details: [
                { direction: 'BUY', quantity: '522.84', commission: '4.80', link: 'https://bscscan.com/tx/0x5ecb6c05bd652acc9ba05801954a6ddf3050f6c40f9de5ab99d246f6a73a19f0' },
                { direction: 'SELL', quantity: '534.64', commission: '0.09', link: 'https://bscscan.com/tx/0xace0d37af2930a24fb75c71f3d8e7625f10928a1df71cbe867311c5188c6e729' },
            ],
        },
        {
            Datetime: '19.01.24 04:13:54',
            Active: 'DogeZilla ',
            BaseActive: 'WBNB',
            Amount: '565.49',
            Profit: '$1.81',
            details: [
                { direction: 'BUY', quantity: '565.49', commission: '2.90', link: 'https://bscscan.com/tx/0x542665528084683b88a3cc3feac1cfb6c88a1b692bbbe631cbb3c259887ca532' },
                { direction: 'SELL', quantity: '570.28', commission: '0.08', link: 'https://bscscan.com/tx/0x5b7b01a59769a59d7449d5eb1e4ca32da098326bb32fb4d5f73311d0c3282508' },
            ],
        },
        {
            Datetime: '19.01.24 04:13:54',
            Active: 'Pepe Coin',
            BaseActive: 'WBNB',
            Amount: '47.50',
            Profit: '$1.98',
            details: [
                { direction: 'BUY', quantity: '47.50', commission: '0.23', link: 'https://bscscan.com/tx/0x9c63fedcf174236fc09918150f4254d4e38652e8d09e2ee68e87ae7d0379f769' },
                { direction: 'SELL', quantity: '49.79', commission: '0.08', link: 'https://bscscan.com/tx/0x49e138e796fe1c7e3d8142216e718ff60ef6fda822eef0753338119695d39b5b' },
            ],
        },
        {
            Datetime: '19.01.24 03:57:54',
            Active: 'Mango Man Intelligent',
            BaseActive: 'WBNB',
            Amount: '409.87',
            Profit: '$1.68',
            details: [
                { direction: 'BUY', quantity: '409.87', commission: '0.23', link: 'https://bscscan.com/tx/0x9c8d9165d1dda1088b744d4c09733e0b2487e28aefc22b359c0c6d6de657eaaa' },
                { direction: 'SELL', quantity: '411.87', commission: '0.09', link: 'https://bscscan.com/tx/0xd59ef26125c60fd93c3e1d6fbe5d6be69f5b1684dd835d13b553a43356fe0b48' },
            ],
        },
        {
            Datetime: '19.01.24 02:35:43',
            Active: 'TCATI',
            BaseActive: 'WBNB',
            Amount: '67.50',
            Profit: '$2.02',
            details: [
                { direction: 'BUY', quantity: '67.50', commission: '4.75', link: 'https://bscscan.com/tx/0xfc6dfe75d50f404553453e007fdf11b708c7d36b056b66ce035d2790f85aae94' },
                { direction: 'SELL', quantity: '74.34', commission: '0.27', link: 'https://bscscan.com/tx/0x9c05f6dfede319399a56e77644a29c108b47eeb935050c5173e0528f36122330' },
            ],
        },
        {
            Datetime: '19.01.24 12:27:00',
            Active: 'Dracarys',
            BaseActive: 'WBNB',
            Amount: '938.83',
            Profit: '$9.46',
            details: [
                { direction: 'BUY', quantity: '938.83', commission: '1.03', link: 'https://bscscan.com/tx/0xdfa22788e0a1ea1aaf5c26882dd537bff613083bc5c4f9fc922241dfbea2131e' },
                { direction: 'SELL', quantity: '949.41', commission: '0.09', link: 'https://bscscan.com/tx/0xa1d37c663328eab0bc3a44c2ac2a790c34d443df3d1ddad00c1ec78fcd77b1a0' },
            ],
        },





        {
            Datetime: '18.01.24 06:07:36',
            Active: 'Ordis',
            BaseActive: 'WBNB',
            Amount: '99.87',
            Profit: '$4.88',
            details: [
                { direction: 'BUY', quantity: '99.87', commission: '0.72', link: 'https://bscscan.com/tx/0xcc4e622fc3344f57ea6ab4e8d87d3ede0e8b0d0d92b98bea9bcaff968f09e1c5' },
                { direction: 'SELL', quantity: '105.72', commission: '0.25', link: 'https://bscscan.com/tx/0x96a74759f0d2764c55bda6e525c2a381afdb0dbf371bd9de57e79a1fc16778de' },
            ],
        },
        {
            Datetime: '18.01.24 06:00:53',
            Active: 'beefy.finance',
            BaseActive: 'WBNB',
            Amount: '97.33',
            Profit: '$1.4',
            details: [
                { direction: 'BUY', quantity: '97.33', commission: '0.20', link: 'https://bscscan.com/tx/0x1b1646275b82e604d007012f28243c01ea0fc48da1e63a8939fe42b0b308b76e' },
                { direction: 'SELL', quantity: '99.02', commission: '0.09', link: 'https://bscscan.com/tx/0xa346b3c883fcd65f3ddef3d00e8f6965836812d8eb42962fb922a2ca4e0e40b8' },
            ],
        },
        {
            Datetime: '18.01.24 02:54:38',
            Active: 'Mango Man Intelligent',
            BaseActive: 'WBNB',
            Amount: '629.61',
            Profit: '$4.83',
            details: [
                { direction: 'BUY', quantity: '629.61', commission: '0.56', link: 'https://bscscan.com/tx/0x8639e032092fa079d3dcf3ef10a9e6879fd35674925a4c9cfcc5aa0494a4506b' },
                { direction: 'SELL', quantity: '635.09', commission: '0.09', link: 'https://bscscan.com/tx/0xaa808b353fe90c13ab7db5b362c697a96e00fbe9524650ad27d4a62ca7be9850' },
            ],
        },
        {
            Datetime: '18.01.24 12:27:02',
            Active: 'Virtue Player Points',
            BaseActive: 'WBNB',
            Amount: '56.35',
            Profit: '$1.29',
            details: [
                { direction: 'BUY', quantity: '56.35', commission: '0.15', link: 'https://bscscan.com/tx/0x122c136f61a7394167fcecaf91c2b5d3dca7108e050d2e0088b0e4c62a4a33c1' },
                { direction: 'SELL', quantity: '57.88', commission: '0.09', link: 'https://bscscan.com/tx/0x70b11f6076690bceb8f7aee266b8445ca7182f7bdb64af77a3aed8579cfd95ef' },
            ],
        },
        {
            Datetime: '18.01.24 12:24:56',
            Active: 'JELLY',
            BaseActive: 'WBNB',
            Amount: '205.05',
            Profit: '$5.55',
            details: [
                { direction: 'BUY', quantity: '205.05', commission: '0.63', link: 'https://bscscan.com/tx/0x2d0680d1ac7e6def4ba7a4cd1ec0694554959256b16dd9c6df8cc971351e5284' },
                { direction: 'SELL', quantity: '211.33', commission: '0.10', link: 'https://bscscan.com/tx/0x18a400ee9d4efb4282562ce2462dcf218c3e9ddd4fc16640361743c0bdfb34bc' },
            ],
        },
        {
            Datetime: '18.01.24 10:43:08',
            Active: 'Omni-Chan',
            BaseActive: 'WBNB',
            Amount: '117.74',
            Profit: '$9.15',
            details: [
                { direction: 'BUY', quantity: '117.74', commission: '1.01', link: 'https://bscscan.com/tx/0xa333b2bf1907abef16138f3f0bc93da70880d36129f0ac65c0f7c967762d408c' },
                { direction: 'SELL', quantity: '127.99', commission: '0.09', link: 'https://bscscan.com/tx/0xb88d68de71691851fba5c24036a77215b4736c3ff7bf6bb26b66c4c21b115cc2' },
            ],
        },
        {
            Datetime: '18.01.24 09:03:04',
            Active: 'RageOnWheels',
            BaseActive: 'WBNB',
            Amount: '1762.65',
            Profit: '$4.58',
            details: [
                { direction: 'BUY', quantity: '1762.65', commission: '0.51', link: 'https://bscscan.com/tx/0x5cd3eb1c5d63b98b8dcc097fd5b520ab5f880dc2034b12d5590c2a1db43a637e' },
                { direction: 'SELL', quantity: '1767.82', commission: '0.08', link: 'https://bscscan.com/tx/0xe138b37b650cd64babc81a54437ccd3a70cf9ab0d031d37cf13152f6836a490c' },
            ],
        },
        {
            Datetime: '18.01.24 06:34:30',
            Active: 'RageOnWheels',
            BaseActive: 'WBNB',
            Amount: '$423.46',
            Profit: '$2.7',
            details: [
                { direction: 'BUY', quantity: '423.46', commission: '0.33', link: 'https://bscscan.com/tx/0x546cdacf1411ee97aa40b58e321960f6353e0e7dcc506a7eff0b5f6959be39ef' },
                { direction: 'SELL', quantity: '426.57', commission: '0.08', link: 'https://bscscan.com/tx/0x76d87d3e618e71e56a6b644f628d3ab34d3c840e3e5172384412e0abaee21eeb' },
            ],
        },
        {
            Datetime: '18.01.24 02:37:19',
            Active: 'Agatech',
            BaseActive: 'WBNB',
            Amount: '$4285.32',
            Profit: '$65.74',
            details: [
                { direction: 'BUY', quantity: '4285.32', commission: '0.09', link: 'https://bscscan.com/tx/0xff8145cc88c2155ff8550f93e3cdf736943aa8fef353f40172d8469d83e955b7' },
                { direction: 'SELL', quantity: '4351.24', commission: '0.09', link: 'https://bscscan.com/tx/0x60bde8053794b3f3351c5ad763f59c8aafa7ef33b57f8875c61d8295e7bab3d6' },
            ],
        },
        {
            Datetime: '18.01.24 02:17:47',
            Active: 'Oraichain Token',
            BaseActive: 'WBNB',
            Amount: '$2596.19',
            Profit: '$1.73',
            details: [
                { direction: 'BUY', quantity: '2596.19', commission: '0.09', link: 'https://bscscan.com/tx/0x94fb21e58299ff2a3cd970284d77224e462fb24f53a384903ce0eb0a5b315648' },
                { direction: 'SELL', quantity: '2598.10', commission: '0.09', link: 'https://bscscan.com/tx/0x4163cd85ddf2ee3298c3689890514f595877b8ebe23462c24fcf97d94ae8ffee' },
            ],
        },
        {
            Datetime: '18.01.24 02:00:28',
            Active: 'Bonk Grok',
            BaseActive: 'WBNB',
            Amount: '$859.46',
            Profit: '$8.24',
            details: [
                { direction: 'BUY', quantity: '859.46', commission: '1.03', link: 'https://bscscan.com/tx/0xaabed10c04127ed1db11fb6b5d3d30cd93540cce159b9913a253259662741fb2' },
                { direction: 'SELL', quantity: '869.11', commission: '0.38', link: 'https://bscscan.com/tx/0x63961a672a3f1061c1bf2fe3eb8f069bcb2541ee0a1101daba27c35dc820fafc' },
            ],
        },
        {
            Datetime: '18.01.24 01:07:20',
            Active: 'SafeX',
            BaseActive: 'WBNB',
            Amount: '$1495.36',
            Profit: '$8.8',
            details: [
                { direction: 'BUY', quantity: '1495.36', commission: '0.99', link: 'https://bscscan.com/tx/0x553ce7012812c8524f04a50346d5da52fee6c9a7f8764f6de985b310376e6c5f' },
                { direction: 'SELL', quantity: '1505.42', commission: '0.27', link: 'https://bscscan.com/tx/0xead8a08767d9d974dd9594a707e7fb8489179b36d98ba2bcbf6a9ffb38bf8036' },
            ],
        },
        {
            Datetime: '18.01.24 12:12:25',
            Active: 'TCATI',
            BaseActive: 'WBNB',
            Amount: '$146.89',
            Profit: '$3.59',
            details: [
                { direction: 'BUY', quantity: '146.89', commission: '0.52', link: 'https://bscscan.com/tx/0x0c37b80a3613d9c8a30d4a19adc7408af620815136809c86d3d14cfb8c5c70ae' },
                { direction: 'SELL', quantity: '151.27', commission: '0.27', link: 'https://bscscan.com/tx/0xead8a08767d9d974dd9594a707e7fb8489179b36d98ba2bcbf6a9ffb38bf8036' },
            ],
        },
        {
            Datetime: '18.01.24 11:45:43',
            Active: 'TCATI',
            BaseActive: 'WBNB',
            Amount: '$88.86',
            Profit: '$2.29',
            details: [
                { direction: 'BUY', quantity: '88.86', commission: '0.39', link: 'https://bscscan.com/tx/0xb654a40621a57516144e00657c0dbd705bbf652fb1e7c6c8d05c4aea57829b96' },
                { direction: 'SELL', quantity: '91.81', commission: '0.27', link: 'https://bscscan.com/tx/0x479e624479738e6af699f81e8dae850d0a48cfca020ac27ac777082f87df6940' },
            ],
        },
        {
            Datetime: '18.01.24 11:03:13',
            Active: 'IgnoreFud_Dividen_Tracker',
            BaseActive: 'WBNB',
            Amount: '$156.53',
            Profit: '$0.03',
            details: [
                { direction: 'BUY', quantity: '156.53', commission: '3.99', link: 'https://bscscan.com/tx/0x0cc939f58ad479fb5439f085b9a5110450b44f3bbf279bf085cc251d86c3177f' },
                { direction: 'SELL', quantity: '160.82', commission: '0.27', link: 'https://bscscan.com/tx/0x4b4e356b1349cd08b333b90594ce5aa792deadb006a41853b89311c8a1a11afa' },
            ],
        },
        {
            Datetime: '18.01.24 10:46:13',
            Active: 'IgnoreFud_Dividen_Tracker',
            BaseActive: 'WBNB',
            Amount: '$96.01',
            Profit: '$6.93',
            details: [
                { direction: 'BUY', quantity: '96.01', commission: '1.13', link: 'https://bscscan.com/tx/0x4e660546cb71cf9262168a5bbfcd5d40b2d8bb90b523150588bca37b6d0606c5' },
                { direction: 'SELL', quantity: '104.42', commission: '0.35', link: 'https://bscscan.com/tx/0x74f65e7a6a62808480abee3108f468702ec5bbe6cdda9c6fee18b52f19a95bb4' },
            ],
        },
        {
            Datetime: '18.01.24 10:39:40',
            Active: 'Global Virtual Coin',
            BaseActive: 'WBNB',
            Amount: '$1509.19',
            Profit: '$7.35',
            details: [
                { direction: 'BUY', quantity: '1509.19', commission: '12.98', link: 'https://bscscan.com/tx/0x888e3bca305afdce496d70b92e4bfdad2b0ca5707f8ff3e8920c22543890fd4f' },
                { direction: 'SELL', quantity: '1529.60', commission: '0.08', link: 'https://bscscan.com/tx/0x1cd06b8e92656fb186e553ac4a4db458c11c1a8cdf6e112430e26a162df4f4e8' },
            ],
        },
        {
            Datetime: '18.01.24 07:08:06',
            Active: 'Baby Dragon',
            BaseActive: 'WBNB',
            Amount: '$174.95',
            Profit: '$6.44',
            details: [
                { direction: 'BUY', quantity: '174.95', commission: '0.69', link: 'https://bscscan.com/tx/0xfd898806c5e0088c7afbfa3e5faa0feb561a6d78b0aeb51fa7e192704fbf88a7' },
                { direction: 'SELL', quantity: '182.17', commission: '0.09', link: 'https://bscscan.com/tx/0x7000a403c352224b2c5bd9cda0a1b76155d5079cb7e5da8dd1c7eb7404b7618e' },
            ],
        },
        {
            Datetime: '18.01.24 05:16:32',
            Active: 'TCATI',
            BaseActive: 'WBNB',
            Amount: '$317.19',
            Profit: '$0.81',
            details: [
                { direction: 'BUY', quantity: '317.19', commission: '4.32', link: 'https://bscscan.com/tx/0x58a7f105fc854fd0c378c846468f929c8e71e60902ce9350ffff97775e2b76fb' },
                { direction: 'SELL', quantity: '322.59', commission: '0.27', link: 'https://bscscan.com/tx/0x90b4c92fe69dd9d5a0a2b7f09b10c7dfe495b80026230dce74e884c5c4bdec92' },
            ],
        },
        {
            Datetime: '18.01.24 02:21:49',
            Active: 'Mist',
            BaseActive: 'WBNB',
            Amount: '$733.77',
            Profit: '$23.94',
            details: [
                { direction: 'BUY', quantity: '733.77', commission: '2.48', link: 'https://bscscan.com/tx/0x10dc750bf8887df3fdce7c91d2683e1c9501760984154138f221be9bf7601db4' },
                { direction: 'SELL', quantity: '760.27', commission: '0.08', link: 'https://bscscan.com/tx/0xd06d2ed1c4a77643d52161fe361010f900b2dfee6b78d5991d1ca3431be63643' },
            ],
        },
        {
            Datetime: '18.01.24 02:11:58',
            Active: 'ZUZALU',
            BaseActive: 'WBNB',
            Amount: '$52.64',
            Profit: '$2.22',
            details: [
                { direction: 'BUY', quantity: '52.64', commission: '0.51', link: 'https://bscscan.com/tx/0x48797379690fb0283f8bf0711f1f6807367d356ac5ada172967bf2acb709d6e2' },
                { direction: 'SELL', quantity: '55.70', commission: '0.33', link: 'https://bscscan.com/tx/0x013a1658a9d342c2a29d8da818061d453d0522da0400abddc246a936e087dcf1' },
            ],
        },
        {
            Datetime: '18.01.24 01:26:52',
            Active: 'ZUZALU',
            BaseActive: 'WBNB',
            Amount: '$91.72',
            Profit: '$3.07',
            details: [
                { direction: 'BUY', quantity: '91.72', commission: '5.58', link: 'https://bscscan.com/tx/0xf2d26afe02a2b813b5d6436063a27c9f708853fd03836e487aad657d762635cd' },
                { direction: 'SELL', quantity: '100.70', commission: '0.33', link: 'https://bscscan.com/tx/0x605b8f5e20670af2f916770e3d4b8a32f2edff8607ebe0f812ba1c3e103af50e' },
            ],
        },
        {
            Datetime: '17.01.24 06:15:21',
            Active: 'DIVIDEND_TRACKER ',
            BaseActive: 'WBNB',
            Amount: '$109.13',
            Profit: '$12.98',
            details: [
                { direction: 'BUY', quantity: '109.13', commission: '1.84', link: 'https://bscscan.com/tx/0xab6b4d2f27842bddb935ec4e8467c0f742ffc0c2424899fb61f81fb022f6ded2' },
                { direction: 'SELL', quantity: '124.40', commission: '0.45', link: 'https://bscscan.com/tx/0x3b0998d0f0d193cced929d9786584114074cf93fa772cebae1312226c8505276' },
            ],
        },





        {
            Datetime: '17.01.24 05:57:00', //35330090
            Active: 'GAIA Everworld',
            BaseActive: 'WBNB',
            Amount: '$485.58',
            Profit: '$5.95',
            details: [
                { direction: 'BUY', quantity: '485.58', commission: '0.65', link: 'https://bscscan.com/tx/0x678ab5356193ba3fb2876bf0f4c92d714c4b79ee4adc126c8221015d3ef824f9' },
                { direction: 'SELL', quantity: '492.27', commission: '0.09', link: 'https://bscscan.com/tx/0x7fed1d6a88f808a84f999b613907eb7b5072cee492f62b7a1598c042a1a4747f' },
            ],
        },
        {
            Datetime: '17.01.24 05:06:51',
            Active: 'W3N',
            BaseActive: 'WBNB',
            Amount: '$159.23',
            Profit: '$1.23',
            details: [
                { direction: 'BUY', quantity: '159.23', commission: '0.72', link: 'https://bscscan.com/tx/0xedc6094ab4089aece6e07d39109b9d3012b9adbc7c57e339065cb1045165affb' },
                { direction: 'SELL', quantity: '162.09', commission: '0.91', link: 'https://bscscan.com/tx/0xde89dcc8acdddf633dd8cd5b4c77691932048e7bce4bca7d3066e991950f4e74' },
            ],
        },
        {
            Datetime: '17.01.24 03:02:07',
            Active: 'MoMo KEY',
            BaseActive: 'WBNB',
            Amount: '$99.46',
            Profit: '$2.72',
            details: [
                { direction: 'BUY', quantity: '99.46', commission: '2.05', link: 'https://bscscan.com/tx/0xcba36100a3a2c8122d7e51d72489c1d963fb0d42908e2bad3483092624a09293' },
                { direction: 'SELL', quantity: '104.31', commission: '0.08', link: 'https://bscscan.com/tx/0xf4c21b82559f637c160822bb633d196988876a69d1e629557e8f7794430a5e16' },
            ],
        },
        {
            Datetime: '17.01.24 03:00:25',
            Active: 'Bomber Coin',
            BaseActive: 'WBNB',
            Amount: '$2157.2',
            Profit: '$7.06',
            details: [
                { direction: 'BUY', quantity: '2157.2', commission: '0.10', link: 'https://bscscan.com/tx/0xda21efe0f4bf195c4628a6b5be8ad395cb5f7a6890e15fdf1aa3e3625047190d' },
                { direction: 'SELL', quantity: '2164.45', commission: '0.09', link: 'https://bscscan.com/tx/0x3bd3a51660594ee6efab0e0719f0de69cf6f00d8bb4a43d2cd7117e5ae31fa78' },
            ],
        },
        {
            Datetime: '17.01.24 11:42:34',
            Active: 'JELLY',
            BaseActive: 'WBNB',
            Amount: '$109.54',
            Profit: '$2.16',
            details: [
                { direction: 'BUY', quantity: '109.54', commission: '0.28', link: 'https://bscscan.com/tx/0xc0a7e5575cf1d5258161431e036e28548ad715409dbc15c8b3ae47d9ccaef667' },
                { direction: 'SELL', quantity: '112.08', commission: '0.10', link: 'https://bscscan.com/tx/0x258dd254da48301181e6c3902e564ae0579630bccdaf11f46c5c578333e67066' },
            ],
        },
        {
            Datetime: '17.01.24 10:59:04',
            Active: 'LXB',
            BaseActive: 'WBNB',
            Amount: '$0.23',
            Profit: '$27.43',
            details: [
                { direction: 'BUY', quantity: '0.23', commission: '2.96', link: 'https://bscscan.com/tx/0xb9f376a49851a67b0958b0203a243e2bbc35e26dcbd38e2f06cbe32843c9e9d2' },
                { direction: 'SELL', quantity: '30.74', commission: '0.12', link: 'https://bscscan.com/tx/0x879d2bd47550f4737bc1b18332a25205bf0f8d92812cf1aef7b9cbcbe0aa6da9' },
            ],
        },
        {
            Datetime: '17.01.24 09:11:45',
            Active: 'XENO Utility Token',
            BaseActive: 'WBNB',
            Amount: '$88.92',
            Profit: '$1.3',
            details: [
                { direction: 'BUY', quantity: '88.92', commission: '0.15', link: 'https://bscscan.com/tx/0x5c005bf18b16d6c428bf8d6c3030d28b85efa17582c4875cc98994d8d49c507e' },
                { direction: 'SELL', quantity: '90.46', commission: '0.09', link: 'https://bscscan.com/tx/0x0d0dccdf42d5e0f4629240a2b94194591c8255dfcc87c7f0138858f583d88834' },
            ],
        },
        {
            Datetime: '17.01.24 08:48:31',
            Active: 'Drake&#39;s Dog',
            BaseActive: 'WBNB',
            Amount: '$28.32',
            Profit: '$0,93',
            details: [
                { direction: 'BUY', quantity: '28.32', commission: '0.14', link: 'https://bscscan.com/tx/0x75abe70fe897d277832b50dca935234fb281d59ecdb3c4e0bd55f48a1e995b6b' },
                { direction: 'SELL', quantity: '29.58', commission: '0.19', link: 'https://bscscan.com/tx/0x1f0f4a3fb613cfc3cd1b3cce83a3a34e088effa6846adb27014463ca4b3a4364' },
            ],
        },
        {
            Datetime: '17.01.24 08:40:43',
            Active: 'FomoFi',
            BaseActive: 'WBNB',
            Amount: '$58.73',
            Profit: '$23.95',
            details: [
                { direction: 'BUY', quantity: '1349.56', commission: '2.64', link: 'https://bscscan.com/tx/0x2fda7a3509384b985756bced905d1d76c7930b8fa681ac46c4a3fb0baec1397c' },
                { direction: 'SELL', quantity: '1376.00', commission: '0.41', link: 'https://bscscan.com/tx/0x3fd7c3d975b6433a8ed6d051591bc5666f2bd83462529bd4951dabf9d41eaeb4' },
            ],
        },
        {
            Datetime: '17.01.24 06:56:54',
            Active: 'MonPoly Money',
            BaseActive: 'WBNB',
            Amount: '$58.73',
            Profit: '$3.69',
            details: [
                { direction: 'BUY', quantity: '58.73', commission: '0.56', link: 'https://bscscan.com/tx/0x9bbfed1574fd583d15bcd17f1e3a5699dfd6b5f3a743468e21991df61ff9de17' },
                { direction: 'SELL', quantity: '63.16', commission: '0.18', link: 'https://bscscan.com/tx/0x47acbd375343cfd14a7185842175ca83be3e1f3bd0bf555813a557c2ffd4dfb2' },
            ],
        },




        {
            Datetime: '17.01.24 05:57:00',
            Active: 'GAIA Everworld',
            BaseActive: 'WBNB',
            Amount: '$479.71',
            Profit: '$5.87',
            details: [
                { direction: 'BUY', quantity: '479.71', commission: '0.65', link: 'https://bscscan.com/tx/0x678ab5356193ba3fb2876bf0f4c92d714c4b79ee4adc126c8221015d3ef824f9' },
                { direction: 'SELL', quantity: '486.31', commission: '0.08', link: 'https://bscscan.com/tx/0x7fed1d6a88f808a84f999b613907eb7b5072cee492f62b7a1598c042a1a4747f' },
            ],
        },
        {
            Datetime: '17.01.24 03:02:07',
            Active: 'MoMo KEY',
            BaseActive: 'WBNB',
            Amount: '$98.69',
            Profit: '$2.72',
            details: [
                { direction: 'BUY', quantity: '98.69', commission: '2.02', link: 'https://bscscan.com/tx/0xcba36100a3a2c8122d7e51d72489c1d963fb0d42908e2bad3483092624a09293' },
                { direction: 'SELL', quantity: '103.51', commission: '0.08', link: 'https://bscscan.com/tx/0xf4c21b82559f637c160822bb633d196988876a69d1e629557e8f7794430a5e16' },
            ],
        },
        {
            Datetime: '17.01.24 03:00:25',
            Active: 'Bomber Coin',
            BaseActive: 'WBNB',
            Amount: '$2140.47',
            Profit: '$7.01',
            details: [
                { direction: 'BUY', quantity: '2140.47', commission: '0.09', link: 'https://bscscan.com/tx/0xc0a7e5575cf1d5258161431e036e28548ad715409dbc15c8b3ae47d9ccaef667' },
                { direction: 'SELL', quantity: '2147.66', commission: '0.09', link: 'https://bscscan.com/tx/0x3bd3a51660594ee6efab0e0719f0de69cf6f00d8bb4a43d2cd7117e5ae31fa78' },
            ],
        },
        {
            Datetime: '17.01.24 11:42:34',
            Active: 'JELLY',
            BaseActive: 'WBNB',
            Amount: '$108.35',
            Profit: '$2.14',
            details: [
                { direction: 'BUY', quantity: '108.35', commission: '0.28', link: 'https://bscscan.com/tx/0xc0a7e5575cf1d5258161431e036e28548ad715409dbc15c8b3ae47d9ccaef667' },
                { direction: 'SELL', quantity: '110.87', commission: '0.10', link: 'https://bscscan.com/tx/0x258dd254da48301181e6c3902e564ae0579630bccdaf11f46c5c578333e67066' },
            ],
        },
        {
            Datetime: '17.01.24 09:11:45',
            Active: 'XENO Utility Token',
            BaseActive: 'WBNB',
            Amount: '$87.91',
            Profit: '$1.28',
            details: [
                { direction: 'BUY', quantity: '87.91', commission: '0.15', link: 'https://bscscan.com/tx/0x5c005bf18b16d6c428bf8d6c3030d28b85efa17582c4875cc98994d8d49c507e' },
                { direction: 'SELL', quantity: '89.43', commission: '0.09', link: 'https://bscscan.com/tx/0x0d0dccdf42d5e0f4629240a2b94194591c8255dfcc87c7f0138858f583d88834' },
            ],
        },
        {
            Datetime: '17.01.24 08:48:31',
            Active: 'Drake&#39;s Dog',
            BaseActive: 'WBNB',
            Amount: '$28.05',
            Profit: '$0,92',
            details: [
                { direction: 'BUY', quantity: '28.05', commission: '0.14', link: 'https://bscscan.com/tx/0x75abe70fe897d277832b50dca935234fb281d59ecdb3c4e0bd55f48a1e995b6b' },
                { direction: 'SELL', quantity: '29.30', commission: '0.19', link: 'https://bscscan.com/tx/0x1f0f4a3fb613cfc3cd1b3cce83a3a34e088effa6846adb27014463ca4b3a4364' },
            ],
        },
        {
            Datetime: '17.01.24 08:40:43',
            Active: 'MonPoly Money',
            BaseActive: 'WBNB',
            Amount: '$1339.38',
            Profit: '$25.29',
            details: [
                { direction: 'BUY', quantity: '1339.38', commission: '0.55', link: 'https://bscscan.com/tx/0x2fda7a3509384b985756bced905d1d76c7930b8fa681ac46c4a3fb0baec1397c' },
                { direction: 'SELL', quantity: '1365.62', commission: '0.40', link: 'https://bscscan.com/tx/0x3fd7c3d975b6433a8ed6d051591bc5666f2bd83462529bd4951dabf9d41eaeb4' },
            ],
        },
        {
            Datetime: '17.01.24 06:56:54',
            Active: 'MonPoly Money',
            BaseActive: 'WBNB',
            Amount: '$58.41',
            Profit: '$3.7',
            details: [
                { direction: 'BUY', quantity: '58.41', commission: '0.55', link: 'https://bscscan.com/tx/0x9bbfed1574fd583d15bcd17f1e3a5699dfd6b5f3a743468e21991df61ff9de17' },
                { direction: 'SELL', quantity: '62.83', commission: '0.17', link: 'https://bscscan.com/tx/0x47acbd375343cfd14a7185842175ca83be3e1f3bd0bf555813a557c2ffd4dfb2' },
            ],
        },
        {
            Datetime: '17.01.24 02:31:08',
            Active: 'xAI',
            BaseActive: 'WBNB',
            Amount: '$428.72',
            Profit: '$6.95',
            details: [
                { direction: 'BUY', quantity: '428.72', commission: '0.75', link: 'https://bscscan.com/tx/0x322a63c56ffa7a20782b2aec8e15f4cc9d03b63b95add63c668a81efe80065c6' },
                { direction: 'SELL', quantity: '436.50', commission: '0.08', link: 'https://bscscan.com/tx/0x5867b3247b27656bf3f72193cb6ead530bd3e6f62ce66225a18d7f1bf301cfa7' },
            ],
        },
        {
            Datetime: '17.01.24 12:28:41',
            Active: 'CyberTime Finance',
            BaseActive: 'WBNB',
            Amount: '$92.26',
            Profit: '$1.35',
            details: [
                { direction: 'BUY', quantity: '92.26', commission: '4.44', link: 'https://bscscan.com/tx/0x53f9e09713510fa6668737c73fd85947071932199c6ac0a0bc2d3ea5cdf35ef6' },
                { direction: 'SELL', quantity: '98.13', commission: '0.08', link: 'https://bscscan.com/tx/0x6ef193fd3fa1585cfab587c0460e665f2acd91022f9461b8064545edac302ef7' },
            ],
        },
        {
            Datetime: '17.01.24 12:16:50',
            Active: 'BabyDragon',
            BaseActive: 'WBNB',
            Amount: '$1554.29',
            Profit: '$0.07',
            details: [
                { direction: 'BUY', quantity: '1554.29', commission: '1.49', link: 'https://bscscan.com/tx/0xece93dd85be204f07aa51f0412b6af45cf7cb3a43b24de4355169f600571c625' },
                { direction: 'SELL', quantity: '1555.93', commission: '0.08', link: 'https://bscscan.com/tx/0x5eb67e9027ec7d25be4488511cd054ee49a304a836789b3bdb600c0b4973e0d4' },
            ],
        },
        {
            Datetime: '16.01.24 11:25:14',
            Active: 'Coldstack',
            BaseActive: 'WBNB',
            Amount: '$1593.67',
            Profit: '$14.05',
            details: [
                { direction: 'BUY', quantity: '1593.67', commission: '1.49', link: 'https://bscscan.com/tx/0xae6d813fd6fae8b2b9ffc296351743f321b966d3ada72c8a99451d4418ac7f39' },
                { direction: 'SELL', quantity: '1609.29', commission: '0.08', link: 'https://bscscan.com/tx/0xc41f2b57e404ff11be6ccd1310e0a6e8fed69fef1d653c65a52aa26801f30e7a' },
            ],
        },
        {
            Datetime: '16.01.24 07:28:05',
            Active: 'ExaTech',
            BaseActive: 'WBNB',
            Amount: '$1474.72',
            Profit: '$113.22',
            details: [
                { direction: 'BUY', quantity: '1474.72', commission: '10.28', link: 'https://bscscan.com/tx/0x0ed7b95a3070dda4fcaeb37ee1ef36c81c9471efbea0f9a11925d107c4ba11df' },
                { direction: 'SELL', quantity: '1598.35', commission: '0.13', link: 'https://bscscan.com/tx/0x89103a2c4dbb3ef2b421a2f353db7d1e14bfadbdf97b629006a7c2f5e0bf82bd' },
            ],
        },
        {
            Datetime: '16.01.24 12:08:04',
            Active: 'FomoFi',
            BaseActive: 'WBNB',
            Amount: '$754.17',
            Profit: '$7.64',
            details: [
                { direction: 'BUY', quantity: '754.17', commission: '0.85', link: 'https://bscscan.com/tx/0x8aa9a698155fc0ccd8c87ae2f6a568fa27d5fcdec91f95ad151eafa2b9f38c6b' },
                { direction: 'SELL', quantity: '762.83', commission: '0.17', link: 'https://bscscan.com/tx/0x56bb56956d248a5b5b84d6feaa36c0b914d0fc4d1fb760142ff4a89a8b62fc46' },
            ],
        },


        {
            Datetime: '16.01.24 06:48:48',
            Active: 'BabyDragon',
            BaseActive: 'WBNB',
            Amount: '$359.69',
            Profit: '$0.79',
            details: [
                { direction: 'BUY', quantity: '359.69', commission: '0.12', link: 'https://bscscan.com/tx/0x7a3ee2e8fde223ef8c5c6704930beb9e253275d05b8337e1745c1b0d5bd49f42' },
                { direction: 'SELL', quantity: '360.69', commission: '0.09', link: 'https://bscscan.com/tx/0x0dd8b7a520ab44490122f2a79312327f6a0f86ae2e4c439ca350594621f66571' },
            ],
        },
        {
            Datetime: '16.01.24 05:25:08',
            Active: 'MongBNB',
            BaseActive: 'WBNB',
            Amount: '$424.60',
            Profit: '$1.27',
            details: [
                { direction: 'BUY', quantity: '424.60', commission: '0.15', link: 'https://bscscan.com/tx/0x22471d40166152d65be3115bc67128175de799057633e26ec0abb83946b00bc0' },
                { direction: 'SELL', quantity: '426.11', commission: '0.09', link: 'https://bscscan.com/tx/0x8a4a171019fe1aee88e615bbc20d92e3114176edb0f3cbdca3bc061cc52b88f2' },
            ],
        },
        {
            Datetime: '16.01.24 03:24:33',
            Active: 'AITECH',
            BaseActive: 'WBNB',
            Amount: '$3403.14',
            Profit: '$94.05',
            details: [
                { direction: 'BUY', quantity: '3403.14', commission: '0.31', link: 'https://bscscan.com/tx/0x5656690562b147491b3e4965fe535fda2b514b8a57f3738ea06324d1d9c233b7' },
                { direction: 'SELL', quantity: '3497.79', commission: '0.29', link: 'https://bscscan.com/tx/0xaa4fe1308dbcf6c52e15a51103ea4180366fb73cb883dfbb593bb8a54e3fb10e' },
            ],
        },
        {
            Datetime: '16.01.24 12:08:04',
            Active: 'FomoFi',
            BaseActive: 'WBNB',
            Amount: '$768.14',
            Profit: '$7.77',
            details: [
                { direction: 'BUY', quantity: '768.14', commission: '0.87', link: 'https://bscscan.com/tx/0x8aa9a698155fc0ccd8c87ae2f6a568fa27d5fcdec91f95ad151eafa2b9f38c6b' },
                { direction: 'SELL', quantity: '776.96', commission: '0.18', link: 'https://bscscan.com/tx/0x56bb56956d248a5b5b84d6feaa36c0b914d0fc4d1fb760142ff4a89a8b62fc46' },
            ],
        },
        {
            Datetime: '15.01.24 11:12:32',
            Active: 'MongBNB',
            BaseActive: 'WBNB',
            Amount: '$130.98',
            Profit: '$1.08',
            details: [
                { direction: 'BUY', quantity: '130.98', commission: '0.14', link: 'https://bscscan.com/tx/0x85cf3d4f493bf5bcbe707a80249a6938e5e351f12ce2a2b2acf85a2c56a23024' },
                { direction: 'SELL', quantity: '132.29', commission: '0.09', link: 'https://bscscan.com/tx/0x9c1028fa213e2f174b81bd8d2d7fe6452c4f0122936ff4f34fa8267db36cbffb' },
            ],
        },
        {
            Datetime: '15.01.24 08:25:58',
            Active: 'Dracarys',
            BaseActive: 'WBNB',
            Amount: '$781.57',
            Profit: '$7.72',
            details: [
                { direction: 'BUY', quantity: '781.57', commission: '0.84', link: 'https://bscscan.com/tx/0x33b5be1bc1e498de060c177567e06e39d0977e3c2072954bdeac3a88848d42ea' },
                { direction: 'SELL', quantity: '790.22', commission: '0.09', link: 'https://bscscan.com/tx/0x50162c34ab85f283034b56a7b706ada758b743bf4a6fbbc800da63798bd1542c' },
            ],
        },
        {
            Datetime: '15.01.24 07:07:20',
            Active: 'EtherconnectCoin',
            BaseActive: 'WBNB',
            Amount: '$242.08',
            Profit: '$2.09',
            details: [
                { direction: 'BUY', quantity: '242.08', commission: '0.27', link: 'https://bscscan.com/tx/0x1395ff317c8acf17282aedd8a2d1e6e1c1372635280da2ec7050e6bda85b9e57' },
                { direction: 'SELL', quantity: '244.53', commission: '0.09', link: 'https://bscscan.com/tx/0x64532dd97971993d99b5e4e461514bee8bee98aeb3b4b1c3d21aff335d877a5d' },
            ],
        },
        {
            Datetime: '15.01.24 06:56:33',
            Active: 'Dracarys',
            BaseActive: 'WBNB',
            Amount: '$373.31',
            Profit: '$1.06',
            details: [
                { direction: 'BUY', quantity: '373.31', commission: '5.15', link: 'https://bscscan.com/tx/0xaba1bb0f396f79025a81f40f16e4996eb1f3e0bef3ddc17528c9ef57df1ca148' },
                { direction: 'SELL', quantity: '379.61', commission: '0.09', link: 'https://bscscan.com/tx/0x092e9a1453d7ce3f6febcc604b7ace9118b8e4a53f40b0f5d11bd526a048bfa0' },
            ],
        },
        {
            Datetime: '15.01.24 02:28:15',
            Active: 'Grok',
            BaseActive: 'WBNB',
            Amount: '$947.20',
            Profit: '$1.29',
            details: [
                { direction: 'BUY', quantity: '947.20', commission: '3.33', link: 'https://bscscan.com/tx/0xd54303c28cd9cc66b6b03e9e9d86135b4b8f0f8238bb4ee508c2db10d1ab0c47' },
                { direction: 'SELL', quantity: '951.91', commission: '0.09', link: 'https://bscscan.com/tx/0x06fe8de584a733052632b39ebf43ff6ee6754d00c83637e50b8b0b89959ef3ef' },
            ],
        },
        {
            Datetime: '15.01.24 01:19:27',
            Active: 'JELLY',
            BaseActive: 'WBNB',
            Amount: '$917.05',
            Profit: '$14.69',
            details: [
                { direction: 'BUY', quantity: '917.05', commission: '1.54', link: 'https://bscscan.com/tx/0x378898cbec2068f0e013ba5ba195ef23d6ac0f15f2e70ae36a02c3eba30f6f68' },
                { direction: 'SELL', quantity: '933.38', commission: '0.10', link: 'https://bscscan.com/tx/0x12f88b0535b275fbe15d000ecd1cb270894be6dbe8d4d44fcb0c98d87ed7ca36' },
            ],
        },
        {
            Datetime: '15.01.24 05:30:06',
            Active: 'AREON',
            BaseActive: 'WBNB',
            Amount: '$250.29',
            Profit: '$1.47',
            details: [
                { direction: 'BUY', quantity: '250.29', commission: '0.21', link: 'https://bscscan.com/tx/0x5acc6677eb305943991359df9ca8393f12da105d6b0dcbc84b07bb4a33043dc6' },
                { direction: 'SELL', quantity: '252.06', commission: '0.09', link: 'https://bscscan.com/tx/0x44fcc33c85ffeb213afbc94fd0e7d670f82744d9ce3bd94591a53c1e1ffa1ac1' },
            ],
        },
        {
            Datetime: '15.01.24 03:52:04',
            Active: 'BabyDragon',
            BaseActive: 'WBNB',
            Amount: '$461.30',
            Profit: '$2.45',
            details: [
                { direction: 'BUY', quantity: '461.30', commission: '1.97', link: 'https://bscscan.com/tx/0x28e48d6a2d9b738a9c07200bf4222903948eca94ad7ded47219da6616109aac7' },
                { direction: 'SELL', quantity: '463.75', commission: '0.23', link: 'https://bscscan.com/tx/0xe6efd6e63324b5d807c65558ddf4d93fea3c6b5363e35c3c948328a7aad75328' },
            ],
        },
        {
            Datetime: '14.01.24 08:37:42',
            Active: 'PAID Network',
            BaseActive: 'WBNB',
            Amount: '$925.11',
            Profit: '$0.36',
            details: [
                { direction: 'BUY', quantity: '925.11', commission: '2.22', link: 'https://bscscan.com/tx/0xdbff13ff7c2f312635f5d47309c8e06d1927c40680ba2fa8889f79c94e82c26e' },
                { direction: 'SELL', quantity: '929.18', commission: '1.49', link: 'https://bscscan.com/tx/0xb169876597bb09e53ee5d98bdbf6ca234397269999c370c8982946221b6159af' },
            ],
        },
        {
            Datetime: '14.01.24 08:15:03',
            Active: 'Etherconnect Coin',
            BaseActive: 'WBNB',
            Amount: '$265.94',
            Profit: '$11.36',
            details: [
                { direction: 'BUY', quantity: '265.94', commission: '1.19', link: 'https://bscscan.com/tx/0xcc3ac38af03cee0d053e1dc8d2f290c6b20f60f89e136e4ee218f9982fcff114' },
                { direction: 'SELL', quantity: '278.58', commission: '0.09', link: 'https://bscscan.com/tx/0xd9a09216ce85232dc01b346154d1b82812bbc8d15e3520b4520bfb89147e0255' },
            ],
        },
        {
            Datetime: '14.01.24 05:59:24',
            Active: 'PRIVA',
            BaseActive: 'WBNB',
            Amount: '$674.57',
            Profit: '$1.95',
            details: [
                { direction: 'BUY', quantity: '674.57', commission: '0.25', link: 'https://bscscan.com/tx/0xb988524afe5bf090bb2ea433bb01d3ee6132d139914f17e94c8cb1496895ec74' },
                { direction: 'SELL', quantity: '676.86', commission: '0.09', link: 'https://bscscan.com/tx/0xefa3b147873c51cb9f1b71a7885d96ce1a27f9d6eeef1ae795dd966ad304b6eb' },
            ],
        },
        {
            Datetime: '14.01.24 05:19:52',
            Active: 'JELLY',
            BaseActive: 'WBNB',
            Amount: '$186.81',
            Profit: '$1.77',
            details: [
                { direction: 'BUY', quantity: '186.81', commission: '0.25', link: 'https://bscscan.com/tx/0x8de6ab1c6f713f0b526bdcb21f60f72ba54f2427d0ad7c47f1680de17b455520' },
                { direction: 'SELL', quantity: '188.93', commission: '0.10', link: 'https://bscscan.com/tx/0xf11ba78c64b335312d720f20141c0a499d631df9630a2cd54a65c2910c0f7751' },
            ],
        },
        {
            Datetime: '14.01.24 04:52:08',
            Active: 'Dracarys',
            BaseActive: 'WBNB',
            Amount: '$428.75',
            Profit: '$4.32',
            details: [
                { direction: 'BUY', quantity: '428.75', commission: '0.5', link: 'https://bscscan.com/tx/0xadbbea4dabca067afa055091f45321e93b51ab5db7ce3336a835789c41135092' },
                { direction: 'SELL', quantity: '433.66', commission: '0.09', link: 'https://bscscan.com/tx/0x43a6663560cbaa71f36c767b77f905b377eb1674e6f603d418b9a7135a6dac81' },
            ],
        },
        {
            Datetime: '14.01.24 03:29:23',
            Active: 'PALM',
            BaseActive: 'WBNB',
            Amount: '$567.86',
            Profit: '$9.13',
            details: [
                { direction: 'BUY', quantity: '567.86', commission: '0.97', link: 'https://bscscan.com/tx/0xbd6cadfccf04e42c163271a8452ce98dcdcd2dcfadc688233c6dfe5712ff1df1' },
                { direction: 'SELL', quantity: '578.05', commission: '0.09', link: 'https://bscscan.com/tx/0x3f86deb6bca91adeb6d5870e0d2c18e77739572accef5db8ae0e57d434693ff5' },
            ],
        },
        {
            Datetime: '14.01.24 11:45:16',
            Active: 'AREON',
            BaseActive: 'WBNB',
            Amount: '$142.21',
            Profit: '$3.61',
            details: [
                { direction: 'BUY', quantity: '142.21', commission: '3.76', link: 'https://bscscan.com/tx/0x718585af1ec8f9b7fe0085dfe7242cd32f519230be6f98886c6496df22807cbd' },
                { direction: 'SELL', quantity: '149.67', commission: '0.09', link: 'https://bscscan.com/tx/0x56ae5a8abb3a2ae45a170b445609559677d4bf7bb9f653e0ad6490326261611a' },
            ],
        },
        {
            Datetime: '14.01.24 11:28:55',
            Active: 'AREON',
            BaseActive: 'WBNB',
            Amount: '$156.42',
            Profit: '$0.42',
            details: [
                { direction: 'BUY', quantity: '156.42', commission: '0.08', link: 'https://bscscan.com/tx/0xde278e1108a4caccd8cde33b947258ebb5d72fb9cb396b308fc4daeee8db8914' },
                { direction: 'SELL', quantity: '157.01', commission: '0.09', link: 'https://bscscan.com/tx/0x58bb66ad4f463bc8fae04f3fa676f4dfc762aaefd402e753e9c0f1dcb76076c6' },
            ],
        },
    ];

    // const data = [
    //     {
    //         Datetime: '00.00.00 00:00:00',
    //         Active: '-',
    //         BaseActive: '-',
    //         Amount: '$0.00',
    //         Profit: '$0.00',
    //         details: [
    //             { direction: '-', quantity: '000.0', commission: '0.00', link: '000' },
    //             { direction: '-', quantity: '000.0', commission: '0.00', link: '000' },
    //         ],
    //     },
    //     {
    //         Datetime: '00.00.00 00:00:00',
    //         Active: '-',
    //         BaseActive: '-',
    //         Amount: '$0.00',
    //         Profit: '$0.00',
    //         details: [
    //             { direction: '-', quantity: '000.0', commission: '0.00', link: '000' },
    //             { direction: '-', quantity: '000.0', commission: '0.00', link: '000' },
    //         ],
    //     },
    // ];

    const [expandedRows, setExpandedRows] = useState([]);

    const toggleRow = (index) => {
        const isRowExpanded = expandedRows.includes(index);
        setExpandedRows((prev) =>
            isRowExpanded ? prev.filter((rowIndex) => rowIndex !== index) : [...prev, index]
        );
    };

    return (
        <div className="scrollable-table">
            <table className="my-table">
                <thead>
                <tr>
                    <th>Date and Time</th>
                    <th>Active</th>
                    <th>Base Active</th>
                    <th>Amount</th>
                    <th>Profit</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <React.Fragment key={index}>
                        <tr
                            className={`main-row ${expandedRows.includes(index) ? 'expanded' : ''}`}
                            onClick={() => toggleRow(index)}
                        >
                            <td>{row.Datetime}</td>
                            <td>{row.Active}</td>
                            <td>{row.BaseActive}</td>
                            <td>{row.Amount}</td>
                            <td>{row.Profit}</td>
                            <td>
                                <div className="arrow">
                                    <FontAwesomeIcon icon={expandedRows.includes(index) ? faAngleUp : faAngleDown} />
                                </div>
                            </td>
                        </tr>
                        {expandedRows.includes(index) &&
                            row.details.map((detail, detailIndex) => (
                                <tr key={`${index}-${detailIndex}`} className="detail-row">
                                    <td>Direction: {detail.direction}</td>
                                    <td>Quantity: {detail.quantity}</td>
                                    <td>Commission: {detail.commission}</td>
                                    <td>
                                        <a
                                            href={detail.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Details
                                        </a>
                                    </td>
                                </tr>
                            ))}
                    </React.Fragment>
                ))}
                </tbody>
            </table>
        </div>

    );
};

export default MyTable;


