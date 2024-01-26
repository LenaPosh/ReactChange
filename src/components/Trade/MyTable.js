import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './MyTable.css';

const MyTable = () => {
    const data = [
        // {
        //     Datetime: '24.01.24 09:44:04',
        //     Active: 'Bitonite',
        //     BaseActive: 'WBNB',
        //     Amount: '291.16',
        //     Profit: '$16.26',
        //     details: [
        //         { direction: 'BUY', quantity: '291.16', commission: '0.11', link: 'https://bscscan.com/tx/0x3d7fe5c0474858a2cbdb53feb631359b5f1b456968385da2fff77f516838d7a3' },
        //         { direction: 'SELL', quantity: '307.62', commission: '0.09', link: 'https://bscscan.com/tx/0xa727358464f7c773ec8c91d4d92a1a115edbbe8d9df0c82b5586972c9b4a6e0d' },
        //     ],
        // },




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


