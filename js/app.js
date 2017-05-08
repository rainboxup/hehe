new Vue({
	el: '#reg',
	data() {
		return {
			username:'',
			password:'',
			state:''
		}
	},
	methods: {
		register: function(e) {
			//通过ajax的post请求来增加数据
			//1.0 确定url
			var url = 'js/registers.php'
			//2.0 post(url,请求报文体的数据,{emulateJSON:true}).then()
			this.$http.post(url, {
				username: this.username,
				password:this.password
			}, {
				emulateJSON: true
			}).then(function(res) {
				//1.0 获取到响应报文体对象
					var body=res.body;
					if (body === '0') {
						window.location='/xitong/system.html'
					}else{
						this.state = res.body;
					}
			});
			//3.0 重新获取列表数据
		},
	}
})