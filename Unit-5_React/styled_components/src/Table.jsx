import styled  from "styled-components"

export const Table = styled.table`
    width: 80%;
    color: black;
    text-align: center;
    font-size: 35px;
    font-weight: 500; 
    &>tbody>tr:nth-child(even){
         background-color: #f3f3f3;
        height: 100px;
        padding: 0px 1px; 

    }
    &>thead{ 
        height: 100px;
        color:white;
        background-color: #01987a;
    }
    &>tbody>tr:nth-child(odd){
        background-color:white;
        height: 100px;
        padding: 0px 1px; 
    } 
    &>thead>tr>th:first-child{
        border-top-left-radius: 15px ;
    }
    &>thead>tr>th:last-child{
        border-top-right-radius: 15px ;  
    } 
    & > tbody>tr:hover {
        color: #01987a;
    }`