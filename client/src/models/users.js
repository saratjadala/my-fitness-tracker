/* B"H
*/
import myFetch from "./myFetch";
import login from "./login";

export let CurrentUser = null;

export async function Login(email, password) {

    const user = await myFetch('/Users/login', { email, password }) ;

    return CurrentUser = user;
}