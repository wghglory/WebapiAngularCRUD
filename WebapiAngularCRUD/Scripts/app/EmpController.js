
app.controller('empController', function ($scope, empService) {

    $scope.IsNewRecord = 1; //The flag for the new record

    getAll();

    function getAll() {
        empService.getAll().then(function (res) {
            $scope.Employees = res.data;
        },
            function (err) {
                $log.error('failure loading Employee', err);
            });
    }
    
    $scope.save = function () {
        var Employee = {
            Id: $scope.Id,
            Name: $scope.Name,
            Salary: $scope.Salary,
            DeptName: $scope.DeptName,
            Designation: $scope.Designation
        };
        //If the flag is 1 add new record
        if ($scope.IsNewRecord === 1) {
            empService.post(Employee).then(function (res) {
                $scope.Id = res.data.Id;
                getAll();
                $scope.Message = 'Created Successfuly';
            }, function (err) {
                console.log('Err' + err);
            });
        } else { //Edit
            empService.put($scope.Id, Employee).then(function (res) {
                $scope.Message = 'Updated Successfuly';
                getAll();
            }, function (err) {
                console.log('Err' + err);
            });
        }
    };


    $scope.delete = function (id) {
        empService.delete(id).then(function (res) {
            $scope.Message = 'Deleted Successfuly';
            $scope.Id = 'NA';
            $scope.Name = '';
            $scope.Salary = 0;
            $scope.DeptName = '';
            $scope.Designation = '';
            getAll();
        }, function (err) {
            console.log('Err' + err);
        });
    }


    $scope.get = function (emp) {
        $scope.Message = '';

        empService.get(emp.Id).then(function (res) {
            $scope.Id = res.data.Id;
            $scope.Name = res.data.Name;
            $scope.Salary = res.data.Salary;
            $scope.DeptName = res.data.DeptName;
            $scope.Designation = res.data.Designation;

            $scope.IsNewRecord = 0;
        },
        function (err) {
            console.log('failure loading Employee', err);
        });
    }

    $scope.clear = function () {
        $scope.IsNewRecord = 1;
        $scope.Message = '';

        $scope.Id = 0;
        $scope.Name = '';
        $scope.Salary = 0;
        $scope.DeptName = '';
        $scope.Designation = '';
       
    }
});