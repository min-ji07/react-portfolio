import {createSlice} from '@reduxjs/toolkit'
// 변수가 너무 길어서 보기 힘들 때 파일 분할
let stock = createSlice({
    name: 'stock',
    initialState: [50, 100, 150]
})
// 짧지만 임시로 옮겨둠

export default stock;