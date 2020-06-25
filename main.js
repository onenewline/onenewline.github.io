$(function(){
    $('.color .catalog a').on('click',function(){
        $('.color .catalog .cata .fontcolor').removeClass('fontcolor');
        var show = $(this).attr('data');
        console.log(show);
        $('.data').removeClass('data');
        $('.'+show).addClass('data');
        $(this).addClass('fontcolor');
    })

     $('.panel').on('click',function(){
         $('.panel').removeClass('active');
         $(this).addClass('active');
     })
     $.ajax({
         type:'GET',
         url:'./info.json',
         datatype:'json',
         sync:false,
         success:function(data){
             console.log(data);
             $.each(data,function(i,info){
                 console.log(info);
                 if(info.user=='user1'){
                 $('.userinfo1').val(info.nickname);
                 $('.userinfo2').val(info.user);
                 $('.userinfo3').val(info.constellation);
                 $('.userinfo4').val(info.interest);
                 $('.userinfo5').val(info.adress);
                 $('.userinfo6').val(info.school);
                 $('.userinfo7').val(info.job);
                 $('.userinfo8').val(info.signature);
                 $('.userinfo9').val(info.hometown);
                 $('.userinfo0').val(info.email);
                }
             })
         }
     });
     
     var $blog = $('.blog');
     $.ajax({
         type:'GET',
         url:'./blog.json',
         success:function(data){
             $.each(data,function(i,blog){
                 if(blog.user=='user1'){
                 $blog.append('<a href='+blog.url+'>'+blog.title+'</a>');
                }
             })
         }
     });

     $('.addblog').on('click',function(){
         $.ajax({
             type:'POST',
             url:'http://rest.learncode.academy/api/learncode/friends/',
             data: {
                title:$('.blogname').val(),
                url:$('.blogurl').val()
            },
             success:function(newblog){
                 $blog.append('<a href='+newblog.url+'>'+newblog.title+'</a>');
             },
             error:function(){
                 alert("添加失败");
             }
         });
         $('.blogname').val(null);
         $('.blogurl').val(null);
     })
})