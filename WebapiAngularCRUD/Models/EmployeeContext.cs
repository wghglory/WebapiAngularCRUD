using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebapiAngularCRUD.Models
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext() : base("EmployeeContext")
        {
            Database.SetInitializer<EmployeeContext>(new EmployeeDbInitializer());
        }

        public DbSet<Employee> Employees { get; set; }
    }
}