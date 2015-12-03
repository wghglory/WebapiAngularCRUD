using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebapiAngularCRUD.Models
{
    public class EmployeeDbInitializer : DropCreateDatabaseAlways<EmployeeContext>
    {
        public override void InitializeDatabase(EmployeeContext context)
        {
            base.InitializeDatabase(context);
        }

        protected override void Seed(EmployeeContext context)
        {


            new List<Employee> {
                new Employee { Id = 1, DeptName = "Sales", Designation = "Manager", Name = "guanghui", Salary = 120000 },
                new Employee { Id = 2, DeptName = "Tech", Designation = "Developer", Name = "yuhan", Salary = 20000 }

            }.ForEach(x => context.Employees.Add(x));

            context.SaveChanges();

            base.Seed(context);
        }


    }
}