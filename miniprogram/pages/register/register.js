// pages/register/register.js
Page({
  data:{
   // text:"这是一个页面"
   tip:'',
   name:'',
   signature:''
  },
  formBindsubmit:function(e){
   if(e.detail.value.name.length==0||e.detail.value.signature.length==0){
    this.setData({
     tip:'提示：用户名和密码不能为空！',
     name:'',
     signature:''
    })
   }else{
    this.setData({
     tip:'',
     name:'用户名：'+e.detail.value.name,
     signature:'密码：'+e.detail.value.signature
    })
   }
  },
  formReset:function(){
   this.setData({
    tip:'',
    name:'',
    signature:''
   })
  }
 })