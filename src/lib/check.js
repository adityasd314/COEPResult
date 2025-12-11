const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function extractTableFromHTML(htmlString) {
    // Parse the HTML using JSDOM
    const dom = new JSDOM(htmlString);
    const document = dom.window.document;

    // Extract the table element
    const table = document.querySelector("table"); // Assumes there's one table in the response
    if (table) {
        console.log("Table extracted:", table.outerHTML);
        return table.outerHTML;
    } else {
        console.error("No table found in the provided HTML");
        return null;
    }
}

module.exports = extractTableFromHTML;
console.log(extractTableFromHTML(`<style>
    .hiddenCell {
        padding: 0px 0px 0px 20px !important;
    }
</style>

<div class="accordian-body in"  id="StudentData">
    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #2AE6DF;">
        <thead>
            <tr class="info">
                <th></th>
                <th>
                    Sr.No.
                </th>
                <th>
                    Semester Name
                </th>
                <th>Semester Credit</th>
                <th>
                    Credits Registered
                </th>
                <th>Credits Earned</th>
                <th>
                    New SGPA
                </th>
                <th>
                    Old CGPA
                </th>
                <th>
                    New CGPA
                </th>
                <th>Status</th>
            </tr>
        </thead>

        <tbody>


                <tr>
                    <td><a data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#StudentSubjectRecord1" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                    <td>1</td>
                    <td>Semester V</td>
                    <td>
                        25
                    </td>
                    <td>
                        28
                    </td>

                    <td>4</td>
                    <td></td>
                    <td>0</td>
                    <td></td>
                    <td>
                            <span class="label label-success">Completed Registration</span>
                    </td>

                </tr>
                <tr class="hiddenRow">
                    <td colspan="11" class="hiddenCell">
                        <div class="accordian-body collapse" id="StudentSubjectRecord1">
                            <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #8ED35F;">
                                <thead>
                                    <tr class="success">
                                        <th></th>
                                        <th>SrNo.</th>
                                        <th>Subject Title</th>
                                        <th>Subject Type</th>
                                        <th>Subject Code</th>
                                        <th>Semester Credit</th>
                                        <th>No.of Attempt</th>
                                        <th>Awarded Grade</th>
                                        <th>Awarded Grade Point</th>
                                        <th>Subject Status</th>
                                        
                                        <th>Apply for Re-Exam </th>
                                    </tr>
                                </thead>
                                <tbody>

                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord11" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>1</td>
                                            <td>Software Engineering: Mini Project - Stage 1</td>
                                            <td>Project</td>
                                            <td>CT-21009</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>                                       
                                            
                                            <td style=" ">Appearing </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord11">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    
                                                                    <td style=" "> </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord12" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>2</td>
                                            <td>Database Management Systems Laboratory</td>
                                            <td>Laboratory</td>
                                            <td>CT-21002</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord12">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>89.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord13" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>3</td>
                                            <td>Artificial Intelligence Laboratory</td>
                                            <td>Laboratory</td>
                                            <td>CT-21004</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>                                       
                                            
                                            <td style=" ">Appearing </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord13">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>84.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord14" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>4</td>
                                            <td>Computer Networks Laboratory</td>
                                            <td>Laboratory</td>
                                            <td>CT-21006</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>                                       
                                            
                                            <td style=" ">Appearing </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord14">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    
                                                                    <td style=" "> </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord15" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>5</td>
                                            <td>Fundamentals of Robotics</td>
                                            <td>Theory</td>
                                            <td>MFG(IF)-22001</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>                                       
                                            
                                            <td style=" ">Appearing </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord15">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Mid Term</td>
                                                                    <td>20.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>18.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord16" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>6</td>
                                            <td>Artificial Intelligence</td>
                                            <td>Theory</td>
                                            <td>CT-21003</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>                                       
                                            
                                            <td style=" ">Appearing </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord16">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>53.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>7.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Mid Term</td>
                                                                    <td>17.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord17" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>7</td>
                                            <td>Spanish Language</td>
                                            <td>Theory</td>
                                            <td>AS(HS)-21004</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>                                       
                                            
                                            <td style=" ">Appearing </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord17">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>39.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>20.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Mid Term</td>
                                                                    <td>29.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord18" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>8</td>
                                            <td>Database Management Systems</td>
                                            <td>Theory</td>
                                            <td>CT-21001</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>                                       
                                            
                                            <td style=" ">Appearing </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord18">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Mid Term</td>
                                                                    <td>23.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>End Term</td>
                                                                    <td>49.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>9.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord19" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>9</td>
                                            <td>Computer Organization</td>
                                            <td>Theory</td>
                                            <td>CT-21007</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>                                       
                                            
                                            <td style=" ">Appearing </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord19">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    
                                                                    <td style=" "> </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord110" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>10</td>
                                            <td>Constitution of India</td>
                                            <td>Theory</td>
                                            <td>ML-21001</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>PP</td>
                                            <td>0.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord110">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>94.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord111" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>11</td>
                                            <td>Making Sense of Data</td>
                                            <td>Theory</td>
                                            <td>CT(HO)-21001</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>                                       
                                            
                                            <td style=" ">Appearing </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord111">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    
                                                                    <td style=" "> </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord112" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>12</td>
                                            <td>Entrepreneurship Principles and Process</td>
                                            <td>Theory</td>
                                            <td>HS-21001</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>                                       
                                            
                                            <td style=" ">Appearing </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord112">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    
                                                                    <td style=" "> </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord113" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>13</td>
                                            <td>Computer Networks</td>
                                            <td>Theory</td>
                                            <td>CT-21005</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord113">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>9.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Mid Term</td>
                                                                    <td>24.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>48.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord114" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>14</td>
                                            <td>Probability and Statistics for Engineers</td>
                                            <td>Theory</td>
                                            <td>MA-21001</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>                                       
                                            
                                            <td style=" ">Appearing </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord114">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Mid Term</td>
                                                                    <td>26.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>End Term</td>
                                                                    <td>40.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>10.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                    </td>
                </tr>
                <tr>
                    <td><a data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#StudentSubjectRecord2" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                    <td>2</td>
                    <td>Semester IV</td>
                    <td>
                        24
                    </td>
                    <td>
                        24
                    </td>

                    <td>24</td>
                    <td>8.88</td>
                    <td>0</td>
                    <td>8.98</td>
                    <td>
                            <span class="label label-success">Completed Semester</span>
                    </td>

                </tr>
                <tr class="hiddenRow">
                    <td colspan="11" class="hiddenCell">
                        <div class="accordian-body collapse" id="StudentSubjectRecord2">
                            <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #8ED35F;">
                                <thead>
                                    <tr class="success">
                                        <th></th>
                                        <th>SrNo.</th>
                                        <th>Subject Title</th>
                                        <th>Subject Type</th>
                                        <th>Subject Code</th>
                                        <th>Semester Credit</th>
                                        <th>No.of Attempt</th>
                                        <th>Awarded Grade</th>
                                        <th>Awarded Grade Point</th>
                                        <th>Subject Status</th>
                                        
                                        <th>Apply for Re-Exam </th>
                                    </tr>
                                </thead>
                                <tbody>

                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord21" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>1</td>
                                            <td>Data Structures and Algorithms - II Laboratory </td>
                                            <td>Laboratory</td>
                                            <td>CT-20017</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord21">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>86.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord22" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>2</td>
                                            <td>Microprocessor Techniques Laboratory</td>
                                            <td>Laboratory</td>
                                            <td>CT-20016</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>AB</td>
                                            <td>9.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord22">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>87.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord23" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>3</td>
                                            <td>Data Communication </td>
                                            <td>Theory</td>
                                            <td>CT-20015</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>BB</td>
                                            <td>8.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord23">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>15.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>14.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>45.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord24" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>4</td>
                                            <td>Vector Calculus and Partial Differential Equations</td>
                                            <td>Theory</td>
                                            <td>MA-20004</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>BB</td>
                                            <td>8.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord24">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>18.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>End Term</td>
                                                                    <td>46.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>13.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord25" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>5</td>
                                            <td>Rapid Prototyping Practice Using Object Oriented Programming</td>
                                            <td>Theory</td>
                                            <td>CT-20018</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>AB</td>
                                            <td>9.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord25">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>86.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord26" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>6</td>
                                            <td>Microprocessor Techniques </td>
                                            <td>Theory</td>
                                            <td>CT-20013</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>AB</td>
                                            <td>9.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord26">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Mid Term</td>
                                                                    <td></td>
                                                                    
                                                                    <td style="color:red">Absent </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>14.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>39.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>10.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord27" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>7</td>
                                            <td>Sensors and Automation </td>
                                            <td>Theory</td>
                                            <td>ICE(IF)-20002</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord27">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>14.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>14.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>55.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord28" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>8</td>
                                            <td>Data Structures and Algorithms – II</td>
                                            <td>Theory</td>
                                            <td>CT-20014</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>AB</td>
                                            <td>9.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord28">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>19.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>End Term</td>
                                                                    <td>45.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>15.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord29" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>9</td>
                                            <td>Biology for Engineers</td>
                                            <td>Theory</td>
                                            <td>AS-20001</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>AB</td>
                                            <td>9.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord29">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>18.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>20.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>42.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord210" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>10</td>
                                            <td>Theory of Computation</td>
                                            <td>Theory</td>
                                            <td>CT-20012</td>
                                            <td>4</td>
                                            <td>1</td>
                                            <td>AB</td>
                                            <td>9.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord210">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>16.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>End Term</td>
                                                                    <td>43.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>14.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                    </td>
                </tr>
                <tr>
                    <td><a data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#StudentSubjectRecord3" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                    <td>3</td>
                    <td>Semester III</td>
                    <td>
                        22
                    </td>
                    <td>
                        22
                    </td>

                    <td>22</td>
                    <td>9.36</td>
                    <td>0</td>
                    <td>9.02</td>
                    <td>
                            <span class="label label-success">Completed Semester</span>
                    </td>

                </tr>
                <tr class="hiddenRow">
                    <td colspan="11" class="hiddenCell">
                        <div class="accordian-body collapse" id="StudentSubjectRecord3">
                            <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #8ED35F;">
                                <thead>
                                    <tr class="success">
                                        <th></th>
                                        <th>SrNo.</th>
                                        <th>Subject Title</th>
                                        <th>Subject Type</th>
                                        <th>Subject Code</th>
                                        <th>Semester Credit</th>
                                        <th>No.of Attempt</th>
                                        <th>Awarded Grade</th>
                                        <th>Awarded Grade Point</th>
                                        <th>Subject Status</th>
                                        
                                        <th>Apply for Re-Exam </th>
                                    </tr>
                                </thead>
                                <tbody>

                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord31" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>1</td>
                                            <td>Principles of Programming Languages Laboratory</td>
                                            <td>Laboratory</td>
                                            <td>CT-20009</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>AB</td>
                                            <td>9.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord31">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>87.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord32" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>2</td>
                                            <td>Digital Logic Design Laboratory</td>
                                            <td>Laboratory</td>
                                            <td>CT-20006</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>BB</td>
                                            <td>8.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord32">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>84.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord33" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>3</td>
                                            <td>Development Tools Laboratory</td>
                                            <td>Laboratory</td>
                                            <td>CT-20002</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord33">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>88.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord34" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>4</td>
                                            <td>Data Structures and Algorithms  -I Laboratory </td>
                                            <td>Laboratory</td>
                                            <td>CT-20004</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord34">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>92.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord35" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>5</td>
                                            <td>Innovation and Creativity</td>
                                            <td>Theory</td>
                                            <td>HS-20004</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord35">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>13.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>15.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>39.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord36" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>6</td>
                                            <td>Discrete Structures and  Graph Theory</td>
                                            <td>Theory</td>
                                            <td>CT-20007</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>AB</td>
                                            <td>9.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord36">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Mid Term</td>
                                                                    <td></td>
                                                                    
                                                                    <td style="color:red">Absent </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>17.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>41.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>18.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord37" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>7</td>
                                            <td>Principles of Programming Languages </td>
                                            <td>Theory</td>
                                            <td>CT-20008</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord37">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>19.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>19.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>37.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord38" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>8</td>
                                            <td>Ordinary Differential Equations and Multivariate Calculus </td>
                                            <td>Theory</td>
                                            <td>MA-20001</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>AB</td>
                                            <td>9.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord38">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>15.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>End Term</td>
                                                                    <td>47.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>17.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord39" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>9</td>
                                            <td>Digital Logic Design</td>
                                            <td>Theory</td>
                                            <td>CT-20005</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>AB</td>
                                            <td>9.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord39">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>17.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>15.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>44.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord310" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>10</td>
                                            <td>Feedback Control Systems </td>
                                            <td>Theory</td>
                                            <td>ICE(IF)-20001</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>AB</td>
                                            <td>9.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord310">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>12.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>End Term</td>
                                                                    <td>41.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>17.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord311" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>11</td>
                                            <td>Data Structures and Algorithms – I</td>
                                            <td>Theory</td>
                                            <td>CT-20003</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord311">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>47.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>17.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>19.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord312" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>12</td>
                                            <td>Professional Laws, Ethics, Values and Harmony</td>
                                            <td>Theory</td>
                                            <td>ML-20004</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>PP</td>
                                            <td>0.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord312">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>14.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Mid Term</td>
                                                                    <td></td>
                                                                    
                                                                    <td style="color:red">Absent </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>14.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>End Term</td>
                                                                    <td>39.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                    </td>
                </tr>
                <tr>
                    <td><a data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#StudentSubjectRecord4" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                    <td>4</td>
                    <td>Semester II</td>
                    <td>
                        21
                    </td>
                    <td>
                        21
                    </td>

                    <td>21</td>
                    <td>8.76</td>
                    <td>0</td>
                    <td>8.83</td>
                    <td>
                            <span class="label label-success">Completed Semester</span>
                    </td>

                </tr>
                <tr class="hiddenRow">
                    <td colspan="11" class="hiddenCell">
                        <div class="accordian-body collapse" id="StudentSubjectRecord4">
                            <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #8ED35F;">
                                <thead>
                                    <tr class="success">
                                        <th></th>
                                        <th>SrNo.</th>
                                        <th>Subject Title</th>
                                        <th>Subject Type</th>
                                        <th>Subject Code</th>
                                        <th>Semester Credit</th>
                                        <th>No.of Attempt</th>
                                        <th>Awarded Grade</th>
                                        <th>Awarded Grade Point</th>
                                        <th>Subject Status</th>
                                        
                                        <th>Apply for Re-Exam </th>
                                    </tr>
                                </thead>
                                <tbody>

                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord41" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>1</td>
                                            <td>Physical Education</td>
                                            <td>Training</td>
                                            <td>GY(EA)-19001</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>PP</td>
                                            <td>0.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord41">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>30.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord42" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>2</td>
                                            <td>Basic Electrical Engineering Laboratory</td>
                                            <td>Laboratory</td>
                                            <td>EE-19001</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>AB</td>
                                            <td>9.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord42">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>16.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>18.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>50.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord43" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>3</td>
                                            <td>Solid State Physics Laboratory</td>
                                            <td>Laboratory</td>
                                            <td>PH-19004</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord43">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>94.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord44" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>4</td>
                                            <td>Introduction to Scientific Computational Tools</td>
                                            <td>Laboratory</td>
                                            <td>CT-19002</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord44">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>93.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord45" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>5</td>
                                            <td>Univariate Calculus</td>
                                            <td>Theory</td>
                                            <td>MA-19003</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord45">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>50.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>15.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>19.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord46" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>6</td>
                                            <td>Engineering Graphics and Design</td>
                                            <td>Theory</td>
                                            <td>ME-19003</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>BB</td>
                                            <td>8.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord46">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>9.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>15.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>36.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord47" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>7</td>
                                            <td>Semiconductor Physics and Electromagnetism</td>
                                            <td>Theory</td>
                                            <td>PH-19003</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>BB</td>
                                            <td>8.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord47">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>43.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>19.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>19.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord48" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>8</td>
                                            <td>Basic Electrical Engineering</td>
                                            <td>Theory</td>
                                            <td>EE-19002</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>AB</td>
                                            <td>9.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord48">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>13.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>14.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>50.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord49" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>9</td>
                                            <td>Mechanical Fab Shop</td>
                                            <td>Laboratory</td>
                                            <td>PE-19001</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord49">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>85.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord410" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>10</td>
                                            <td>Engineering Mechanics</td>
                                            <td>Theory</td>
                                            <td>CE-19003</td>
                                            <td>5</td>
                                            <td>1</td>
                                            <td>BB</td>
                                            <td>8.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord410">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>13.10</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>14.15</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>39.90</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                    </td>
                </tr>
                <tr>
                    <td><a data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#StudentSubjectRecord5" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                    <td>5</td>
                    <td>Semester I</td>
                    <td>
                        21
                    </td>
                    <td>
                        21
                    </td>

                    <td>21</td>
                    <td>8.90</td>
                    <td>0</td>
                    <td>8.90</td>
                    <td>
                            <span class="label label-success">Completed Semester</span>
                    </td>

                </tr>
                <tr class="hiddenRow">
                    <td colspan="11" class="hiddenCell">
                        <div class="accordian-body collapse" id="StudentSubjectRecord5">
                            <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #8ED35F;">
                                <thead>
                                    <tr class="success">
                                        <th></th>
                                        <th>SrNo.</th>
                                        <th>Subject Title</th>
                                        <th>Subject Type</th>
                                        <th>Subject Code</th>
                                        <th>Semester Credit</th>
                                        <th>No.of Attempt</th>
                                        <th>Awarded Grade</th>
                                        <th>Awarded Grade Point</th>
                                        <th>Subject Status</th>
                                        
                                        <th>Apply for Re-Exam </th>
                                    </tr>
                                </thead>
                                <tbody>

                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord51" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>1</td>
                                            <td>Design Thinking</td>
                                            <td>Laboratory</td>
                                            <td>HS-19002</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>BC</td>
                                            <td>7.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord51">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>12.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>15.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>45.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord52" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>2</td>
                                            <td>Electronics and Computer Workshop</td>
                                            <td>Laboratory</td>
                                            <td>ETC-19001</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>BB</td>
                                            <td>8.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord52">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>75.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord53" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>3</td>
                                            <td>Applied Chemistry Laboratory</td>
                                            <td>Laboratory</td>
                                            <td>AS-19002</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>AB</td>
                                            <td>9.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord53">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>84.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord54" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>4</td>
                                            <td>Optics and Modern Physics Laboratory</td>
                                            <td>Laboratory</td>
                                            <td>PH-19002</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord54">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>94.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord55" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>5</td>
                                            <td>Applied Chemistry</td>
                                            <td>Theory</td>
                                            <td>AS-19001</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord55">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>End Term</td>
                                                                    <td>49.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>19.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>18.50</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord56" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>6</td>
                                            <td>Programming for Problem Solving</td>
                                            <td>Theory</td>
                                            <td>CT-19001</td>
                                            <td>4</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord56">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td></td>
                                                                    
                                                                    <td style="color:red">Absent </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>End Term</td>
                                                                    <td>86.30</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td></td>
                                                                    
                                                                    <td style="color:red">Absent </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>Mid Term</td>
                                                                    <td></td>
                                                                    
                                                                    <td style="color:red">Absent </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord57" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>7</td>
                                            <td>Linear Algebra</td>
                                            <td>Theory</td>
                                            <td>MA-19002</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>AA</td>
                                            <td>10.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord57">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>20.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>20.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>56.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord58" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>8</td>
                                            <td>Optics and Modern Physics</td>
                                            <td>Theory</td>
                                            <td>PH-19001</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>AB</td>
                                            <td>9.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord58">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>12.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Mid Term</td>
                                                                    <td>17.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>56.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord59" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>9</td>
                                            <td>Effective Communication Skills</td>
                                            <td>Laboratory</td>
                                            <td>HS-19001</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>BB</td>
                                            <td>8.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord59">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>23.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>21.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>30.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a  data-isopen="false" onclick="StudentRecord(this)" data-parent="#StudentData" data-toggle="collapse" data-target="#SubjectMarksRecord510" class="accordion-toggle"><span class="glyphicon glyphicon-plus-sign"></span></a></td>
                                            <td>10</td>
                                            <td>Foundations of Mechanical Engineering</td>
                                            <td>Theory</td>
                                            <td>ME-19001</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>CC</td>
                                            <td>6.00</td>                                       
                                            
                                            <td style=" ">Pass </td>
                              
                                            
                                                
                                                

                                            <td>
                                                
                                                
                                                
                                                
                                                
                                            </td>
                                            
                                        </tr>
                                        <tr class="hiddenRow">
                                            <td colspan="12" class="hiddenCell">
                                                <div class="accordian-body collapse" id="SubjectMarksRecord510">
                                                    <table class="table table-bordered" id="veggiegrid" style="background-color: white; border-width: medium; border-color: #F1DB80;">
                                                        <thead>
                                                            <tr class="warning">
                                                                <th>SrNo.</th>
                                                                <th>Exam Name</th>
                                                                <th>Obtained Mark</th>
                                                                
                                                                <th>Exam Student Status</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Internal1/Assignment</td>
                                                                    <td>8.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Internal2/Attendance</td>
                                                                    <td>12.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>End Term</td>
                                                                    <td>34.00</td>
                                                                    
                                                                    <td style=" ">Present </td>
                                                                    
                                                                   

                                                                    

                                                               

                                                                </tr>
                                                        </tbody>
                                                    </table>
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                    </td>
                </tr>
        </tbody>

    </table>

</div>
<div align="right" class="col-lg-11">
    <input type="button" id="btnSave" name="btnSave" value="Save" class="btn btn-info" />
</div>
<script>
    function StudentRecord(_controlId) {
        var isOpen = $(_controlId).data('isopen');
        var expandSpan = $(_controlId).children('span');

        if (!isOpen) {
            $(_controlId).data('isopen', true);
            $(expandSpan).attr('class', 'glyphicon glyphicon-minus-sign');
        } else {
            $(_controlId).data('isopen', false);
            $(expandSpan).attr('class', 'glyphicon glyphicon-plus-sign');
        }
    }
    $('#btnSave').click(function () {
        var data = $('#frmReExamProcess').serializeArray();
        $('input[name="IsReExam"').each(function () {
            var _element = $(this);
            if (!_element.parent().hasClass('checked')) {
                data.push({
                    name: "UncheckIsReExam",
                    value: _element.val(),
                });
            }
        })
        $('input[name="IsAllowReExam"').each(function () {
            var _element = $(this);
            if (!_element.parent().hasClass('checked')) {
                data.push({
                    name: "IsNotAllowReExam",
                    value: _element.val(),
                });
            }
        })

        $('input[name="IsAllowReExam"').each(function () {
            var _element = $(this);
            if (!_element.parent().hasClass('checked')) {
                data.push({
                    name: "NonIsIsSelectReexamSubject",
                    value: _element.val()
                });
            }
            else {
                data.push({
                    name: "IsIsSelectReexamSubject",
                    value: _element.val()
                });
            }
        })
        blockForm('Please Wait....');
        $.post('/ReExamProcess/FormSave', data).success(function (_d) {
            unBlockForm();
            $('#genMsg').html(_d.Message).addClass(_d.flagClass).show();

        })
    })
    $('#YearID').change(function () {
        $('#DeptID').val(0);
        $('#CourseLevelPID').val(0);
        $('#BranchID').val(0);
        $('#SemesterID').val(0);
        $('#DivisionID').val(0);
    });
    $('#DeptID').change(function () {
        $('#CourseLevelPID').val(0);
        $('#BranchID').val(0);
        $('#SemesterID').val(0);
        $('#DivisionID').val(0);
    });
    $('#CourseLevelPID').change(function () {
        $('#BranchID').val(0);
        $('#SemesterID').val(0);
        $('#DivisionID').val(0);
    });
    $('#BranchID').change(function () {
        $('#SemesterID').val(0);
        $('#DivisionID').val(0);
    });
    $('#SemesterID').change(function () {
        $('#DivisionID').val(0);
    });

</script>

`))