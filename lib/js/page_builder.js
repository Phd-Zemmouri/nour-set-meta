var menu = `
        <div class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li>
                            <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="dropdown-toggle lang-entry">Data&nbsp;<span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="javascript:load_data(true)" class='lang-entry'><i class="fa fa-refresh"></i>&nbsp;Load Data</a></li>
                                <li><a href="Cases_Data.html" class='lang-entry'><i class="fa fa-table"></i>&nbsp;Cases Data</a></li>
                                <li><a href="Cases_Data_Algeria.html" class='lang-entry'><i class="fa fa-table"></i>&nbsp;Cases Data Algeria</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="dropdown-toggle lang-entry">Charts&nbsp;<span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="Cases_Chart_Algeria.html" class='lang-entry'><i class="fa fa-table"></i>&nbsp;Algeria</a></li>
                                <li><a href="Cases_Chart_Algeria_USA.html" class='lang-entry'><i class="fa fa-table"></i>&nbsp;Algeria Vs USA</a></li>
                                <li><a href="Cases_Chart_Comparaison_Country.html" class='lang-entry'><i class="fa fa-bar-chart"></i>&nbsp;Countries Comparaison</a></li>
                                <li><a href="Cases_Chart_Comparaison_Model.html" class='lang-entry'><i class="fa fa-line-chart"></i>&nbsp;Models Comparaison</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i class="fa fa-user"></i>&nbsp;<i class="fa fa-caret-down"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-user">
                                <li>
                                    <a href="#" class='lang-entry'><i class="fa fa-user"></i>&nbsp;User Profile</a>
                                </li>
                                <li>
                                    <a href="#" class='lang-entry' data-toggle="modal" data-target="#myModal"><i class="fa fa-gear"></i>&nbsp;Settings</a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="login.html" class='lang-entry'><i class="fa fa-sign-out"></i>&nbsp;Logout</a>
                                </li>
                            </ul>
                            <!-- /.dropdown-user -->
                        </li>
                        <li><a href="about.html"><i class="fa fa-info-circle"></i></a></li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div><!--/.container-fluid -->
        </div>
`

var ribbon = `
        <a href="https://github.com/zemimoh/NORTHWIND_Dashboard" target="_blank"><i class="fa fa-github"></i>&nbsp;View Source on GitHub</a>
`
var footer = `
        <div class="container"><p class="text-muted lang-entry">© 2026. Powred By ZEMMOURI Mohamed</p></div>
`

$('div.menu').html(menu)
$('div.ribbon').html(ribbon)
$('footer').append(footer)
