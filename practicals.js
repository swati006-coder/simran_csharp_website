const units = [
 {id:1,title:".NET Framework & Visual Studio IDE",desc:"GUI controls, Windows Forms, properties and menus.",programs:[
  ["Student Registration Form","Create a form to collect basic student information.","Windows Forms controls: Label, TextBox, RadioButton, ComboBox and Button.","// C# Windows Forms: add controls in the Visual Studio Designer\n// Button click example\nprivate void btnSubmit_Click(object sender, EventArgs e)\n{\n    string name = txtName.Text;\n    string course = cmbCourse.Text;\n    MessageBox.Show(\"Name: \" + name + \"\\nCourse: \" + course);\n}","Enter Name: Aman\nSelect Course: BCA\n\n[Message Box]\nName: Aman\nCourse: BCA"],
  ["Simple Calculator","Perform basic arithmetic using two numbers.","TextBox, Button, Label and numeric conversion.","private void btnAdd_Click(object sender, EventArgs e)\n{\n    double a = Convert.ToDouble(txtFirst.Text);\n    double b = Convert.ToDouble(txtSecond.Text);\n    lblResult.Text = \"Sum = \" + (a + b);\n}","Input: 10 and 5\nOutput: Sum = 15"],
  ["Login Form","Check a simple username and password.","TextBox, password character, CheckBox, Button and MessageBox.","private void btnLogin_Click(object sender, EventArgs e)\n{\n    if (txtUsername.Text == \"student\" && txtPassword.Text == \"1234\")\n        MessageBox.Show(\"Login successful\");\n    else\n        MessageBox.Show(\"Invalid username or password\");\n}","Input: student / 1234\nOutput: Login successful"],
  ["Student Details Form","Display student details with grouped controls.","GroupBox, PictureBox, ListBox and ComboBox.","private void btnShow_Click(object sender, EventArgs e)\n{\n    lstDetails.Items.Clear();\n    lstDetails.Items.Add(\"Name: \" + txtName.Text);\n    lstDetails.Items.Add(\"Course: \" + cmbCourse.Text);\n}","Output example:\nName: Aman\nCourse: BCA"],
  ["Menu-Based Application","Create a menu and show menu actions.","MenuStrip, ToolStrip and MessageBox.","private void exitToolStripMenuItem_Click(object sender, EventArgs e)\n{\n    MessageBox.Show(\"Thank you for using the application\");\n}","Menu: File\n  New\n  Exit\n\nAfter clicking Exit:\n[Message Box]\nThank you for using the application"]
 ]},
 {id:2,title:"C# Fundamentals",desc:"Variables, operators, conditions, loops, methods, arrays and strings.",programs:[
  ["Arithmetic Calculator","Calculate addition, subtraction, multiplication and division.","Variables, operators and Console.WriteLine.","using System;\nclass Program\n{\n    static void Main()\n    {\n        int a = 10, b = 5;\n        Console.WriteLine(\"Addition = \" + (a + b));\n        Console.WriteLine(\"Subtraction = \" + (a - b));\n        Console.WriteLine(\"Multiplication = \" + (a * b));\n        Console.WriteLine(\"Division = \" + (a / b));\n    }\n}","Addition = 15\nSubtraction = 5\nMultiplication = 50\nDivision = 2"],
  ["Even or Odd Checker","Check whether a number is even or odd.","if-else and modulus operator (%).","using System;\nclass Program\n{\n    static void Main()\n    {\n        int number = 7;\n        if (number % 2 == 0)\n            Console.WriteLine(\"Even number\");\n        else\n            Console.WriteLine(\"Odd number\");\n    }\n}","Odd number"],
  ["Multiplication Table","Print the multiplication table of a number.","for loop and arithmetic operators.","using System;\nclass Program\n{\n    static void Main()\n    {\n        int n = 5;\n        for (int i = 1; i <= 10; i++)\n            Console.WriteLine($\"{n} x {i} = {n * i}\");\n    }\n}","5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50"],
  ["Array Operations","Store numbers in an array and calculate their sum.","Arrays, foreach loop and variables.","using System;\nclass Program\n{\n    static void Main()\n    {\n        int[] numbers = { 10, 20, 30, 40 };\n        int sum = 0;\n        foreach (int n in numbers) sum += n;\n        Console.WriteLine(\"Sum = \" + sum);\n    }\n}","Sum = 100"],
  ["String Operations","Display string length and uppercase text.","String property and ToUpper().","using System;\nclass Program\n{\n    static void Main()\n    {\n        string text = \"DotNet\";\n        Console.WriteLine(\"Length = \" + text.Length);\n        Console.WriteLine(\"Uppercase = \" + text.ToUpper());\n    }\n}","Length = 6\nUppercase = DOTNET"]
 ]},
 {id:3,title:"ADO.NET",desc:"Database connections, commands, DataSet and DataGridView.",programs:[
  ["Database Connection","Connect a C# application to a SQL Server database.","SqlConnection and connection strings. Replace server/database details for your setup.","using System.Data.SqlClient;\n\nstring cs = @\"Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=CollegeDB;Integrated Security=True\";\nusing (SqlConnection con = new SqlConnection(cs))\n{\n    con.Open();\n    Console.WriteLine(\"Database connected successfully\");\n}","Console Output:\nDatabase connected successfully"],
  ["Insert Student Record","Insert a student into a database table.","SqlConnection, SqlCommand and parameters. Assumes a Students table with Name and Course columns.","string sql = \"INSERT INTO Students(Name, Course) VALUES(@name, @course)\";\nusing (SqlCommand cmd = new SqlCommand(sql, con))\n{\n    cmd.Parameters.AddWithValue(\"@name\", txtName.Text);\n    cmd.Parameters.AddWithValue(\"@course\", txtCourse.Text);\n    cmd.ExecuteNonQuery();\n}","Before Insert:\nStudents table has 2 records\n\nAfter Insert:\n1 row inserted successfully\n\nExample new record:\n101   Aman   BCA"],
  ["Search Student Record","Find a student by roll number.","Parameterized SQL query and ExecuteReader. Adjust column names to match your table.","string sql = \"SELECT Name, Course FROM Students WHERE RollNo=@roll\";\nusing (SqlCommand cmd = new SqlCommand(sql, con))\n{\n    cmd.Parameters.AddWithValue(\"@roll\", txtRollNo.Text);\n    using (SqlDataReader reader = cmd.ExecuteReader())\n    {\n        if (reader.Read())\n            lblResult.Text = reader[\"Name\"].ToString();\n        else\n            lblResult.Text = \"Record not found\";\n    }\n}","Search Roll Number: 101\n\nSearch Result:\nName: Aman\nCourse: BCA"],
  ["Update and Delete Record","Update or delete a student record safely.","UPDATE/DELETE SQL commands with parameters. Run only against your practice database.","string sql = \"UPDATE Students SET Course=@course WHERE RollNo=@roll\";\nusing (SqlCommand cmd = new SqlCommand(sql, con))\n{\n    cmd.Parameters.AddWithValue(\"@course\", txtCourse.Text);\n    cmd.Parameters.AddWithValue(\"@roll\", txtRollNo.Text);\n    int rows = cmd.ExecuteNonQuery();\n    MessageBox.Show(rows > 0 ? \"Record updated\" : \"Record not found\");\n}","Message Box:\nRecord updated successfully\n\nUpdated row:\n101   Aman   BCA"],
  ["Display Records in DataGridView","Show student records in a grid.","SqlDataAdapter, DataTable and DataGridView. Requires a configured connection and Students table.","using System.Data;\nusing System.Data.SqlClient;\nDataTable table = new DataTable();\nusing (SqlDataAdapter adapter = new SqlDataAdapter(\"SELECT * FROM Students\", con))\n{\n    adapter.Fill(table);\n}\ndataGridView1.DataSource = table;","DataGridView:\n--------------------------------\nRoll No.    Name       Course\n--------------------------------\n101         Aman       BCA\n102         Neha       BCA\n103         Ravi       BCom\n--------------------------------"]
 ]},
 {id:4,title:"ASP.NET",desc:"Web Forms concepts, validation, sessions, cookies and query strings.",programs:[
  ["Student Registration Web Form","Collect student details in a web page.","ASP.NET Core Razor Pages example. Add properties to the PageModel and bind the form.","<form method=\"post\">\n  <label>Name</label>\n  <input name=\"StudentName\" required />\n  <label>Course</label>\n  <input name=\"Course\" required />\n  <button type=\"submit\">Register</button>\n</form>","Browser Form:\nName: Aman\nCourse: BCA\n[Register]\n\nAfter Submit:\nRegistration submitted successfully."],
  ["Form Validation","Validate required fields in a web form.","HTML required attribute; server-side validation should also be used.","<form>\n  <label>Email</label>\n  <input type=\"email\" name=\"Email\" required />\n  <button type=\"submit\">Submit</button>\n</form>","If Email is empty or invalid:\nPlease enter a valid email address.\n\nIf Email is aman@example.com:\nForm submitted successfully."],
  ["Session Management","Store a value for the current user's session.","In ASP.NET Core, configure session services and middleware first.","// Example in an ASP.NET Core handler\nHttpContext.Session.SetString(\"StudentName\", \"Aman\");\nstring name = HttpContext.Session.GetString(\"StudentName\") ?? \"Guest\";","Session value displayed on page:\nWelcome, Aman"],
  ["Cookies Example","Store and read a small preference using a cookie.","Cookies are sent by the browser; do not store passwords or sensitive data in them.","Response.Cookies.Append(\"Course\", \"BCA\");\nstring course = Request.Cookies[\"Course\"] ?? \"Not set\";","Cookie value displayed on page:\nCourse = BCA"],
  ["Query String Example","Pass a value in the URL query string.","Read query values in an ASP.NET Core Razor Page.","// URL example: /Details?name=Aman\nstring name = Request.Query[\"name\"].ToString();\nif (string.IsNullOrWhiteSpace(name)) name = \"Guest\";","Output for /Details?name=Aman:\nAman"]
 ]}
];

const $ = id => document.getElementById(id);
function showPage(page){
  ["home","student","units","practicals"].forEach(p => $(p+"Page").classList.toggle("hidden",p!==page));
  document.querySelectorAll("nav [data-page]").forEach(b=>b.classList.toggle("active",b.dataset.page===page || (page==="practicals"&&b.dataset.page==="units")));
  window.scrollTo({top:0,behavior:"smooth"});
}
document.addEventListener("click",e=>{
 const b=e.target.closest("[data-page]");
 if(b) showPage(b.dataset.page);
});
function unitCard(u){return `<div class="card unit-card" role="button" tabindex="0" data-unit="${u.id}"><span class="unit-no">UNIT ${u.id}</span><h3>${u.title}</h3><p class="muted">${u.desc}</p><strong>5 Practicals →</strong></div>`}
$("homeUnits").innerHTML=units.map(unitCard).join("");
$("unitGrid").innerHTML=units.map(unitCard).join("");
document.addEventListener("click",e=>{const c=e.target.closest("[data-unit]");if(c) openUnit(Number(c.dataset.unit));});
document.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches("[data-unit]")){e.preventDefault();openUnit(Number(e.target.dataset.unit));}});
let currentUnit=1;
function openUnit(id){
 const u=units.find(x=>x.id===id);if(!u)return;
 $("unitHeading").textContent=`Unit ${u.id}: ${u.title}`;
 $("unitDescription").textContent=u.desc;
 $("programList").innerHTML=u.programs.map((p,i)=>`<button type="button" data-program="${i}" class="${i===0?"active":""}">${i+1}. ${p[0]}</button>`).join("");
 $("programList").querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>showProgram(id,Number(b.dataset.program))));
 showProgram(id,0);showPage("practicals");
}
function escapeHtml(s){return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
function showProgram(unitId,i){
 currentUnit=unitId;
 const u=units.find(x=>x.id===unitId),p=u.programs[i];
 $("programList").querySelectorAll("button").forEach((b,j)=>b.classList.toggle("active",i===j));
 $("programDetails").innerHTML=`<span class="pill">UNIT ${u.id} · PRACTICAL ${i+1} OF 5</span><h2>${escapeHtml(p[0])}</h2>
 <div class="block"><h3>Aim</h3><p>${escapeHtml(p[1])}</p></div>
 <div class="block"><h3>Topics / Controls Covered</h3><p>${escapeHtml(p[2])}</p></div>
 <div class="block"><h3>Code / Example</h3><pre class="code">${escapeHtml(p[3])}</pre><button class="secondary" type="button" id="copyCode">Copy Code</button></div>
 <div class="block"><h3>Expected Output</h3><div class="output">${escapeHtml(p[4])}</div></div>
 <div class="block"><h3>Conclusion</h3><p>This practical demonstrates the main concept of <strong>${escapeHtml(p[0])}</strong>. Run the code in the appropriate C# / .NET project and adjust control names or database settings as needed.</p></div>`;
 $("copyCode").addEventListener("click",async()=>{
   try{await navigator.clipboard.writeText(p[3]);$("copyCode").textContent="Copied!";}
   catch(err){const ta=document.createElement("textarea");ta.value=p[3];document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove();$("copyCode").textContent="Copied!";}
 });
}
