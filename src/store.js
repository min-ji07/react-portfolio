import {configureStore, createSlice} from '@reduxjs/toolkit';
// 파일 분할해서 가져오기 
import stock from './store/stockSlick'
// redux store 세팅
// index.js 에 Provider 세팅
// 여러곳에서 필요하지 않은 state는 store에 작성할 필요 없음 --> 해당 컴포넌트에서 작성할 것

let username = createSlice({
    name: 'username',
    initialState: 'dust',
    // Redux에서 state변경하는 법
    // 컴포넌트에서 state 수정해달라고 store 로 요청함
    // 수정 해주는 함수
    reducers: {
        changeName(state){
                    // state는 기존 state
            return 'minji' // + state 이렇게 뒤에 원래값을 더할수도 있음
        },
        changeName2(){
            // 함수 추가
        }
    }
});
// 다른데서 사용할 수 있게 export 하는 것
// actions를 쓰면 reducers 밑에 함수를 다른데서도 쓸 수 있음
export let {changeName, changeName2 } = username.actions; // object 자료임

let arr = createSlice({
    name: 'arr',
    initialState: {id: 'dust', age : 20},
    // 자꾸 헷갈려서 적어놓음 배열로 감싸놓으면 컴포넌트에서 state.arr.age 로 값을 가져올 수 없음(undefined)
    reducers: {
        changeArr(state){
            // state가 object, array 라면 return 없이 직접 수정도 가능함
            state.age += 1
        }
    }
})
export let {changeArr} = arr.actions;

let cartItem = createSlice({
    name: 'cartItem',
    initialState: [
        {
            id: 0,
            name: '크레용신짱',
            count: 2
        },
        {
            id: 2,
            name: '장난감 짱구',
            count: 1
        }
    ],
    reducers: {
        changeItemName(state){
            state[0].name = '수정된 크레용 신짱!'
        },
        // 파라미터 값 입력도 가능함
        plus(state){
            state[0].count += 1;
        },
        // 비슷한 함수를 따로 만들 필요 없음
        // 👍num에 들어오는 숫자가 10이라면 한꺼번에 10추가도 된다는 말씀👍
        // 보통 파라미터는 action이라고 작명을 많이 함
        plus2(state, action){
            state[0].count += action.payload;
                                // payload ? 를 같이 써줘야한다고 함
        },
    }
});
export let { changeItemName, plus, plus2 } = cartItem.actions;


export default configureStore({
    // 위에 state값을 입력 후 여기 등록해줘야 사용가능
    // 뒤에 reducer 필수
    reducer: {
        // 원하는 작명: 위에 선언한 변수.reducer
        user: username.reducer,
        // 분할된 파일의 reducer
        stock: stock.reducer,
        arr: arr.reducer,
        cartItem: cartItem.reducer
    }
})



/*
Redux 사용 이유
- props 전송이 필요없음 state 전송이 편리해짐

*/