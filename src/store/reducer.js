let intialState={
	menu:require("./menu"),
	setMenuOption:"",
	a:require("./sample-test"),
	tests:[],
	chapter:"",
	excercise:"",
	quiz:"",
	level:"",
}
if(localStorage.getItem("state"))
{
	intialState=JSON.parse(localStorage.getItem("state"))
}
const reducer=function(state=intialState,action){
	switch(action.type)
	{
		case "setMenuOption":
			return {
				...state,
				setMenuOption:action.payload
			}
		case "setTemp":
			return {
				...state,
				a:state.a.map(x=>x.id===action.id?({...x,temp:action.temp}):x)
			}
		case "setChapter":
			return {
				...state,
				chapter:action.payload
			}
			
		case "setExcercise":
			return {
				...state,
				excercise:action.payload
			}
			
		case "setQuiz":
			return {
				...state,
				quiz:action.payload
			}
			
		case "setLevel":
			return {
				...state,
				level:action.payload
			}
		case "testSubmit":
			return {
				...state,
				tests:[...state.tests,state.a.map(x=>{return {...x,excercise:state.excercise,quiz:state.quiz,level:state.level,chapter:state.chapter,point:x.temp===x.ca?1:0}})]
			}
		case "saveAll":
			localStorage.setItem("state",JSON.stringify(state))	
			return state
		default:
			return state
	}
}

export default reducer;