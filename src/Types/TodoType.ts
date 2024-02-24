export type TodoType={
    id:number,
    title:string,
    excerpt:string,
    description:string|null,
    date:Date,
    category:string,
    isCompleted:boolean,   
}

export type InitialStateType={
    todos:TodoType[],
    error:string,
    loading:boolean,  
}