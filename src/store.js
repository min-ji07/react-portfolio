import {bindActionCreators, configureStore, createSlice} from '@reduxjs/toolkit';
// 파일 분할해서 가져오기 
import stock from './store/stockSlick'
import shopImg from './store/shopImgSlick'
// redux store 세팅
// index.js 에 Provider 세팅
// 여러곳에서 필요하지 않은 state는 store에 작성할 필요 없음 --> 해당 컴포넌트에서 작성할 것
import { useNavigate } from 'react-router-dom';

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

let cartItemDetail = createSlice({
    name: 'cartItemDetail',
    initialState: [
        {
            id: 4,
            name: 'TT짱구',
            count: 0
        },
        {
            id: 7,
            name: '원하는 게 있는 짱구',
            count: 0
        },
        {
            id: 3,
            name: '마스크 짱구',
            count: 0
        },
    ]
})

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
        },
        {
            id: 5,
            name: '쿠키러너스',
            count: 1
        }
    ],
    reducers: {
        changeItemName(state){
            state[0].name = '수정된 크레용 신짱!'
        },
        ascChange(state, action){
            console.log(action.payload);
            // return 오른쪽 코드로 갈아치워준다고 함
        },
        addItem(state, action){
            console.log('추가 할 아이템: ', action.payload);
            let itemId = action.payload.id;
            let value = state.find((el) => el.id === itemId);
            // itemId === value 는 잘못된걸까? --> Y!
            // object의 id 값 === object의 id 값을 찾아낸 값(객체)
            if(value == undefined){
                state.push(action.payload);
            }else{
                value.count++;
                console.log('같은 상품이 있습니다 / 상품 갯수를 추가합니다');
            }
        },
        deleteItem(state, action){
            console.log('삭제 할 아이템: ', action.payload);
            let value = state.findIndex((v) => v.id === action.payload.id);
            state.splice(value, 1);
        },
        // 파라미터 값 입력도 가능함
        plus(state, action){
            console.log(action.payload); // value.id 값은 잘 들어옴
            // findIndex() --> 원하는 거 몇번째에 있나 찾아줌
            let value = state.find((el) => el.id === action.payload);
            console.log(value);
            console.log('찾은 id값', value.id);
            if(action.payload === value.id){
                value.count += 1;
                // state[action.payload].count += 1; state[배열 인덱스].count 라 오류남
            }else{
                console.log('일치하는 id값이 없습니다');
            }
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
export let { changeItemName, plus, plus2, addItem, ascChange, deleteItem } = cartItem.actions;

// 장바구니
let shopItem = createSlice({
    name: 'shopItem',
    initialState: [],
    reducers: {
        shopAddItem(state, action){
            // console.log('click 한 값 가져옴: ', action.payload);
            let value = state.find((v) => v.id === action.payload.id);
            if(value === undefined){
                state.push(action.payload);
            }else{
                value.count++;
            }
        },
        shopDeleteItem(state, action){
            // console.log('아이템 삭제');
            let value = state.findIndex((v) => v.id === action.payload.id);
            state.splice(value, 1);
        },
        allDeleteItem(state){
            return state = [];
        },
    }
})
export let {shopAddItem, shopDeleteItem, allDeleteItem} = shopItem.actions;

// 열고 닫기
let close = createSlice({
    name: 'close',
    initialState: false,
    reducers: {
        btnSwitch(state, action){
            return action.payload;
        },
    }
})
export let {btnSwitch} = close.actions;

// header menu 클릭시 모달창 띄우기
let headerMenu = createSlice({
    name: 'headerMenu',
    initialState: false,
    reducers: {
        modalOpen(state, action){
            const body = document.querySelector('body');
            if(action.payload){
                body.classList.add('body-hide');
            }else{
                body.classList.remove('body-hide');
            }
            return action.payload;
        }
    }
})
export let { modalOpen } = headerMenu.actions;

// 게시판
let board = createSlice({
    name: 'board',
    initialState: [],
    reducers: {
        heartPlus(state, action){
            // 글 하나에 좋아요 하나만 가능하게 만들기
            let board = localStorage.getItem("BoardContent");
            board = JSON.parse(board);
            const idx = action.payload;
            const id = state.find((v) => v.id === board[action.payload].id);
            if(id){
                id.heart += 1;
            }else{
                state.push(board[idx]);
            }

        },
        boardDelete(state, action){
            let board = localStorage.getItem("BoardContent");
            board = JSON.parse(board);
            const id = action.payload;
            // console.log(board[id]);
            if(window.confirm('글을 삭제하시겠습니까?😥')){
                board.splice(id, 1);
                localStorage.setItem("BoardContent", JSON.stringify(board));
                // window.location.href = `${process.env.PUBLIC_URL}/study`;
            }else{
                return
            }
        }
    }
})
export let { heartPlus, boardDelete } = board.actions;


export default configureStore({
    // 위에 state값을 입력 후 여기 등록해줘야 사용가능
    // 뒤에 reducer 필수
    reducer: {
        // 원하는 작명: 위에 선언한 변수.reducer
        user: username.reducer,
        shopImg: shopImg.reducer,
        // 분할된 파일의 reducer
        stock: stock.reducer,
        arr: arr.reducer,
        cartItem: cartItem.reducer,
        cartItemDetail: cartItemDetail.reducer,
        shopItem: shopItem.reducer,
        close: close.reducer,
        headerMenu: headerMenu.reducer,
        board: board.reducer,
    }
})



/*
Redux 사용 이유
- props 전송이 필요없음 state 전송이 편리해짐
*/