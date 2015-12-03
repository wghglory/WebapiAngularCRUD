using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebapiAngularCRUD.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Salary { get; set; }
        public string DeptName { get; set; }
        public string Designation { get; set; }
    }
}