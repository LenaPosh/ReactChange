import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './MyTable.css';

const MyTable = () => {
    const data = [
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


