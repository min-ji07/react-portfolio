import {createSlice} from '@reduxjs/toolkit'

// 변수가 너무 길어서 보기 힘들 때 파일 분할

// 추가 된 데이터
let shopImg = createSlice({
    name: 'shopImg',
    initialState: [
        {
            id: 0,
            src: '3ce438f341c4c5ab038fc3f1a987b72c9d020bed',
            name: "콜라 짱구",
            price: 5000,
            count: 1
        },
        {
            id: 1,
            src: '9beeaf2766837cc132df501e186de764ac096f7a',
            name: "아침 짱구",
            price: 5000,
            count: 1
        },
        {
            id: 2,
            src: '023c3cee1f8f76526b1086abca413f182b4700b8',
            name: "액션 짱구",
            price: 5000,
            count: 1
        },
        {
            id: 3,
            src: '42ca0a4fdb62e20d88af06631a677fc0a91f279b',
            name: "수줍 짱구",
            price: 5000,
            count: 1
        },
        {
            id: 4,
            src: '64f2e3bfa8f54698fb5228aadad5c7a07909ae7f',
            name: "수박 짱구",
            price: 6000,
            count: 1
        },
        {
            id: 5,
            src: '72a591baa05fb27ad8adac973de52f1e606bf473',
            name: "도적 짱구",
            price: 5000,
            count: 1
        },
        {
            id: 6,
            src: '86f325bffb0f9f3857a24b86c8fc68fc30980c25',
            name: "찰싹 짱구",
            price: 6000,
            count: 1
        },
        {
            id: 7,
            src: '833f6076d7dd105c72ea48aebf60341e8d135386',
            name: "식빵 짱구",
            price: 5000,
            count: 1
        },
        {
            id: 8,
            src: '5295bafcd9e5bfdce266d84ccdbab3d33b472529',
            name: "잠옷 짱구",
            price: 7000,
            count: 1
        },
        {
            id: 9,
            src: '10241f6c6779a09b4c528705e3004fa317a7abbd',
            name: "두근 짱구",
            price: 5000,
            count: 1
        },
        {
            id: 10,
            src: '57533fc1725486c0cf10c39e737cc7827f221acf',
            name: "우산 짱구",
            price: 4000,
            count: 1
        },
        {
            id: 11,
            src: 'ae352dda49c7fae9344d3947054d4871b3f476a3',
            name: "신난 짱구",
            price: 5000,
            count: 1
        },
        {
            id: 12,
            src: 'ba0d6d1c368ec8f65cc383693b3aaf348d4d01d3',
            name: "제발 짱구",
            price: 7000,
            count: 1
        },
        {
            id: 13,
            src: 'd0caf607ec2a1cc1548c1daea224e3847361e698',
            name: "유치원 짱구",
            price: 5000,
            count: 1
        },
        {
            id: 14,
            src: 'dfaf657304f2816b514692d36e761f7440f4d531',
            name: "근육 짱구",
            price: 6000,
            count: 1
        },
        {
            id: 15,
            src: 'e5110a2cf766f1626f615b68f4372f4ec23be863',
            name: "마스크 짱구",
            price: 4000,
            count: 1
        },
        {
            id: 16,
            src: 'e37184a44c89af1017b3d1f47385d57111ff5f2c',
            name: "슬픈 짱구",
            price: 8000,
            count: 1
        },
        {
            id: 17,
            src: 'fa9ba6b3acedf5e761184fb1f4a34006d3f73538',
            name: "행복한 짱구",
            price: 5000,
            count: 1
        },
        {
            id: 18,
            src: 'jjanggu',
            name: "크레용 짱구",
            price: 6000,
            count: 1
        },

    ]
})
// 짧지만 임시로 옮겨둠

export default shopImg;