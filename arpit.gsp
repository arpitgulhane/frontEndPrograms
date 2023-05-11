<!doctype html>
<html>
<head>
    <meta name="layout" content="smart_main_datatable_inst"/>
    <meta name="author" content="Arpit"/>
    <asset:javascript src="jquery.min.js"/>
    <style>
            .fabutton {
              background: none;
              padding: 0px;
              border: none;
            }
            </style>
</head>
<body>
<!-- start page content -->
<div class="page-content-wrapper">
    <div class="page-content">
        <div class="page-bar">
            <div class="page-title-breadcrumb">
                <div class=" pull-left">
                    <div class="page-title"> Activity Master </div>
                </div>
                <ol class="breadcrumb page-breadcrumb pull-right">
                    <li>
                        <i class="fa fa-home"></i>
                        &nbsp;
                        <g:link controller="login" action="erphome" class="parent-item">Home</g:link>
                        &nbsp;
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li class="active"> Activity Master</li>
                </ol>
            </div>
        </div>
        <!-- add content here -->
        <g:if test="${flash.message}">
            <div class="alert alert-success" >${flash.message}</div>
        </g:if>
        <div class="row">
            <div class="col-sm-12">
                <div class="card card-topline-purple">
                    <div class="card-head">
                        <header class="erp-table-header"> Activity Master List</header>
                        <div class="tools">
                            <!-- Modal addCourseGroupType-->
                            <g:link  data-toggle="modal" data-target="#addActivityMaster"><span aria-hidden="true" class="icon-plus" title="Add ActivityMaster" style="float:right; font-size:20px;"></span></g:link>
                        </div>
                    </div>
                    <div class="card-body " id="bar-parent">
                        <div class="table-responsive">
                            <table id="exportTable" class="display nowrap erp-full-width table-striped  table-hover ml-table-bordered">
                                <thead>
                                <tr>
                                    <th class="mdl-data-table__cell--non-numeric"> Sr. No.</th>
                                    <th class="mdl-data-table__cell--non-numeric"> Name </th>
                                    <th class="mdl-data-table__cell--non-numeric"> IsActive </th>
                                    <th class="mdl-data-table__cell--non-numeric">Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                <g:each in="${activity_Master_list}" var="v" status="i">
                                    <tr>
                                        <td class="mdl-data-table__cell--non-numeric">${i+1}
                                            <center>
                                                <i class="fa fa-edit  fa-2x erp-edit-icon-color" data-toggle="modal" data-target="#editActivityMaster${i}"></i>                        </td>
                                        </center>
                                        </td>
                                        <td class="mdl-data-table__cell--non-numeric">${v?.name}</td>
                                        <td class="mdl-data-table__cell--non-numeric">
                                            <g:if test="${v?.isactive}">
                                                <g:link action="isActiveActivityMaster"  params="[ruleId:v.id]" >
                                                    <i class="fa fa-toggle-on fa-2x" style="color:Green" title="active" aria-hidden="true" ></i>
                                                </g:link>
                                            </g:if>
                                            <g:else>
                                                <g:link action="isActiveActivityMaster"  params="[ruleId:v.id]">
                                                    <i class="fa fa-toggle-off fa-2x" style="color:Red" title="Inactive" aria-hidden="true"></i>
                                                </g:link>
                                            </g:else>
                                        </td>
                                        <!--                  Modal DELETE           -->
                                        <td class="mdl-data-table__cell--non-numeric">
                                            <g:form action="deleteActivityMaster">
                                                <input type="hidden" value="${v?.id}" name="deleteId">
                                                <button  data-toggle="modal" data-target="#${i}myModal" class="fabutton" type="submit" onclick="return confirm('Do you want to Delete ?')" ><i class="fa fa-trash-o fa-2x erp-delete-icon-color"></i></button>
                                            </g:form>
                                        </td>
                                    </tr>
                                    <!-- Modal edit -->
                                    <div class="modal fade" id="editActivityMaster${i}" role="dialog">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h4 class="modal-title">Edit Activity Master</h4>
                                                    <a data-dismiss="modal"><i class="fa fa-close fa-2x" style="color:grey !important; display: inline-block !important;"></i></a>
                                                </div>
                                                <g:form action="editActivityMaster">
                                                    <div class="modal-body">
                                                        <div class="form-group">
                                                            <label for="pwd"><b>Name  :</b></label>
                                                            <input type="hidden" value="${v?.id}" name="editId">
                                                            <input type="text" class="form-control" name="name" required="true" value="${v?.name}"  placeholder="Ex. 8 out of 10" >
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="submit" class="btn btn-primary" > <span class="glyphicon glyphicon-save"></span> Update</button>
                                                    </div>
                                                </g:form>
                                            </div>
                                        </div>
                                    </div>
                                </g:each>
                                </tbody>
                            </table>
                            <!-- /#page-wrapper  Page Content  Copy Coding use Only------------------------------------- -->
                            <!-- Modal New VALUE -->
                            <div class="modal fade" id="addActivityMaster" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Add Activity Master</h4>
                                            <a data-dismiss="modal"><i class="fa fa-close fa-2x" style="color:grey !important; display: inline-block !important;"></i></a>
                                        </div>
                                        <g:form action="saveActivityMaster">
                                            <div class="modal-body">
                                                <div class="form-group">
                                                    <label for="pwd"><b> Name : </b> </label>
                                                    <input type="text" class="form-control" name="name" required="true" placeholder=" " >
                                                </div>
                                                <div class="form-group">
                                                    <label for="pwd">Is Active :</label>
                                                    <g:checkBox name="isactive" value="${true}"/>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="submit" class="btn btn-primary" > <span class="glyphicon glyphicon-save"></span> Save</button>
                                            </div>
                                        </g:form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</body>
</html>


