/*
    A function enclosing the distribution of 
    Predictted Value 


    y_hat = theta0 + theta1*x
    (A straight line)

    [Predicted Values are symbolized via hats

*/

/*
@params - 

x - an independent value [decimal]

theta - An array containing two elements,
        the weight vector for the best fit line
        
        [theta0, theta1]

*/

export function hypothesis(x, theta){

    let y_hat = theta[0] + theta[1]*x;

    return y_hat;

}


/*
Gradient Descent

theta = theta - (learning_rate)*gradient

theta_0 = theta_0 - (learning_rate) * (1/m)SIGMA[(y_hat - y)]
theta_1 = theta_1 - (learning_rate) * (1/m)SIGMA[(y_hat - y) * x]

-- Individual gradient -- 

Gradient_0 = 

Gradient_1 = 


*/

/*
@params

X - 1D Input array [...]
Y - 1D input array [...]

theta - An array containing two elements,
        the weight vector for the best fit line
        
[theta0, theta1]


@summary

calculates the gradient (slope) based on the current 
values of the weight vectors

*/




export function gradient(X, Y, theta){
    let m = X.length

    let grad = [0, 0]

    for(let i = 0; i < m; i++){
        let x = X[i];
        let y = Y[i];

        let y_hat = hypothesis(x, theta);

        grad[0] += (y_hat - y);
        grad[1] += (y_hat - y)*x;
    }

    /*
        Check if javascript also dynamically handles the 
        mathematics for 1D and 2D inputs - No 

        Javascript won't handle any dynamic 2D/1D mathematics for us
    */
    // return grad;

    
    // divide each item of the array by m
    // ESCMA Script 2015, ES6 Syntax
    grad.forEach((item, index, arr) => {
        arr[index] = arr[index]/m;
    })

    return grad;

    

}

/*
@params

X - 1D Input array [...]
Y - 1D input array [...]

theta - An array containing two elements,
        the weight vector for the best fit line
        
[theta0, theta1]


@summary

calculates the current error 
(based on the values of theta)



*/



export function error(X, Y, theta){
    let m = X.length;

    let total_error = 0.0;

    for(let i = 0; i < m; i++){
        let y_hat = hypothesis(X[i], theta);

        total_error += (y_hat - Y[i]) * (y_hat - Y[i]);
    }

    return total_error/m;

}

/*
TODO - Find out if a call back function can be passed to this.
It will work as a template function, that will run after the main function has finished executing

*/

/*
@params





*/

export function gradientDescent(X, Y, max_steps = 10, learning_rate = 0.1, render_error = null){
    let theta = [0, 0]
    let error_list = []


    for(let i = 0; i < max_steps; i++){

        // compute grad 
        let grad = gradient(X, Y, theta);

        let e_current = error(X, Y, theta);

        /*
            TODO - instead of pushing maybe directly render 
            these error values on the page

        */
        error_list.push(e_current);


        // update theta

        theta[0] = theta[0] - learning_rate* grad[0];
        theta[1] = theta[1] - learning_rate* grad[1];
        
    }

    return {theta, error_list};
}