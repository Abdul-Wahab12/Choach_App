export default {
    async login(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDw3oc8wmmwKY5VlSN0rXc_TJIoK-0aB28',{
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });

        const responseData = await response.json();

        if(!response.ok) {
            console.log("Response in Filed Login state: ",responseData)
            const error = new Error(responseData.message || 'Fetch to authenticate. Check your login data.');
            throw error;
        }
        console.log("Response in success Login state: ",responseData);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn

        })
    },
    async signup(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDw3oc8wmmwKY5VlSN0rXc_TJIoK-0aB28',{
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });
        const responseData = await response.json();

        if(!response.ok) {
            console.log("Response in Filed Signup state: ",responseData)
            const error = new Error(responseData.message || 'Failed to authenticate. Check your login data!');
            throw error;
        }

        console.log("Response in success Signup state: ",responseData);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    },
    logout(context) {
        context.commit('setUser', {
            token: null,
            userId: null,
            tokenExpiration: null
        });
    }
};