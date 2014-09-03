<angular-refresh url="http://local.drupal-host.dev/nodes/json?callback=JSON_CALLBACK"
      ng-model="angularContent" interval="5000" method="jsonp"></angular-refresh>
<div id="angular-content">
  <!-- Iterate the result. Equivalent to foreach in php. -->
  <div ng-repeat="item in angularContent.nodes">
    <h2>{{item.node.title}}</h2>
    <div class="body">{{item.node.Body}}</div>
    <div class="image"><img src="{{item.node.Image}}" /></div>
  </div>
</div>
