export function abc(ob)
{
	return dispatch=>dispatch({type:"",payload:ob})
}

export function setMenuOption(ob)
{
	return dispatch=>dispatch({type:"setMenuOption",payload:ob})
}

export function setTemp(id,option)
{
	return dispatch=>dispatch({type:"setTemp",id:id,temp:option})
}

export function setChapter(name)
{
	return dispatch=>dispatch({type:"setChapter",payload:name})
}

export function setExcercise(name)
{
	return dispatch=>dispatch({type:"setExcercise",payload:name})
}

export function setQuiz(name)
{
	return dispatch=>dispatch({type:"setQuiz",payload:name})
}

export function setLevel(name)
{
	return dispatch=>dispatch({type:"setLevel",payload:name})
}

export function testSubmit()
{
	return dispatch=>dispatch({type:"testSubmit"})
}

export function saveAll()
{
	return dispatch=>dispatch({type:"saveAll"})
}

