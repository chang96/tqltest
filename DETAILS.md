# Design / Implementation

-   When a request hits the endpoint, the rate limiter middleware checks for whether the rate
    is still within the set value. The request is dropped if the frequency of request is above
    the limit.
-   If the frequency of request is under the limit and the route matches "/howold" route, the 
    request is passed on to the controller and the approprate response in generated 
    (check How does this work?).
-   A wildcard matches all other routes that that does not match "/" and "/howold"

# How does this work?
This is a node js application that calculates age from date of birth in milliseconds.
Internally, the app implements the following steps to return the above result.

1. A function calculateAge takes the date of birth timestamp as an input.

2. The function checks whether or not the timestamp value can be converted to Number 
   and a valid date. If it this is not achieved, the process is immediately
   terminated and a value null is returned.

3. If a valid date is returned in step 2, the function then returns the absolute value of
   the year of the date subtracted from current year.

