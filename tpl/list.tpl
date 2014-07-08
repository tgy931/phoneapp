search: <input type="text" ng-model="query">
order: <select ng-model="orderProp">
		<option value="name">name</option>
		<option value="price">price</option>
  </select>
<hr>


<div>
<h2>{{title}}</h2>
<ul>
	<li ng-repeat="phone in phones | filter:query | orderBy:orderProp" >
	<span ng-click="setTitle(phone.name)">{{phone.name}}</span>
	<p>
		价格：￥{{phone.price}}
	</p>
	<p>
		高级货：{{1 | checkmark}}
	</p>
	</li>
</ul>
</div>