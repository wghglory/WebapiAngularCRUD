app.service('empService', function ($http) {

    //Create new record
    this.post = function (employee) {
        var request = $http({
            method: "post",
            url: "/api/Employees",
            data: employee
        });
        return request;
    };

    //Get Single Records
    this.get = function (id) {
        return $http.get("/api/Employees/" + id);
    };

    //Get All Employees
    this.getAll = function () {
        return $http.get("/api/Employees");
    };


    //Update the Record
    this.put = function (id, employee) {
        var request = $http({
            method: "put",
            url: "/api/Employees/" + id,
            data: employee
        });
        return request;
    };

    //Delete the Record
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/Employees/" + id
        });
        return request;
    };

});
