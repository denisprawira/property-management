import axios from 'axios';

export default class Api {

    constructor() {
        this.api_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMTQ5MDViOGE1N2UxOGU3MzI3NzBmOGM4MTEwMjE1ODE0YzQyYzhiODM0MDdjMjYwYmQwYzQ0N2E0NDZjNDRiMDZhNTU0M2UzM2ViNDA2MzMiLCJpYXQiOjE2NjcxNjc2MzEuOTEyOTM2LCJuYmYiOjE2NjcxNjc2MzEuOTEyOTQ1LCJleHAiOjQ4MjI4NDEyMzEuNzQ2NDUzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.MyLylXJMKIcphMP0kplTaZRnymZNxfwMDlazUAwp--t-FSHcZIsQjV2waBEcDEztzplRZYdQzgmNE96BcxhwQoQOj51TUwb-Y9-MWPbGDRHPknKsxTU1U9p039ARlg8GgTDpRaPfA18APAfN7DY1GVCLE-pSJN43Cr5YubfOzfdZGjOpD5YaDdoozOaLMRMiyk8StUqXhjy1ghUvLgLBqPT5UU5fJcAlApq1y5pA34d8cGXdGtm4LD20ol64m7HfwS2iWez94KGW-bAQSm6QK94CF2M-nmPxtJOuOO7WSDbwFvrYqgHQR3f7pfqVr-GIG_7tmO6B9_gH8T6_1sHRhagolapD7FQafHMySAO-lqgun1y6deE-y5hnjZXAGgF-fooq2a8raXyIo9skAhOazxeEwjCSl2ABDw-pZZRAQ6jIMaA4z4A5q_5TozMYCA4rrq_owA5ZC9TpL_3rOZ28NLRkYekIY0Zvbf9RmHMZ91Q6Quvxzwo-0nuw73H2o7dqFNt3md3oi4qxBlq6eKVpVANcLa0edru0rSPyuCJcaFhRcMB4PjTCySvw4W6c_jW7Ilye4zWkswD-233MbpxVim8SX9_9ezpuVdO5AYbgHZCEACPtL71IbzAr2ENGDu-B0pbj-LcoCROJcOq_og7BrsQIf0BU_4oZ_7JZ95k69js";
        this.client = null;
    //   this.api_url = process.env.REACT_APP_API_ENDPOINT;
        this.api_url = 'https://phplaravel-347545-2684651.cloudwaysapps.com/api';
    }

    init = () => {
        // this.api_token = getCookie("ACCESS_TOKEN");
        let headers = {
            Accept: "application/json"
        };
        if (this.api_token) {
            headers.Authorization = `Bearer ${
            this.api_token
            }`;
        }
        this.client = axios.create({baseURL: this.api_url, timeout: 31000, headers: headers});
        return this.client;
    };

    //auth
    signIn = (data)=>{
        return this.init().post("/auth/login", data);
    }

    getUserList = (params) => {
        return this.init().get("/users", {params: params});
    };
    
    addNewUser = (data) => {
        return this.init().post("/users", data);
    };

    //property
    getPropertyList = (config) => {
        return this.init().get("/property");
    };

    //contact
    getContactList = ()=>{
        return this.init().get("/contact");
    }
  }