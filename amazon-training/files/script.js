jQuery(function($){
	if($("#slider-events").length){
		(function(){
			
			function getWidth(){
				var width = 0;
				
				$("#slider-events .slider li").each(function(){
					width += $(this).outerWidth();
				});
				
				return {
					width: width
				}
			}
			
			function setWidthLi(){
				var width = Math.floor($("#content").width() / 100 * 84 / 5);
				$("#slider-events .slider li").each(function(){
					$(this).width(width - 19);
				});
			}
			
			setWidthLi();
			getWidth();
			
			$(window).resize(function(){
				setWidthLi();
				$("#slider-events .slider ul").width(getWidth().width);
				$('#slider-events .slide-wrap').slider('option', 'max' , (getWidth().width - Math.floor($("#content").width() / 100 * 84)));
			});
			
			$("#slider-events .slider ul").width(getWidth().width);
			
			$('#slider-events .slide-wrap').slider({
				max: getWidth().width - Math.floor($("#content").width() / 100 * 84),
				animate:true,
				slide: function(){
					var val = $('#slider-events .slide-wrap').slider("value");
					
					$("#slider-events .slider ul").css("left", -val);
				},
				change: function(){
					var val = $('#slider-events .slide-wrap').slider("value");
					
					$("#slider-events .slider ul").animate({left: -val});
				}
			});
		})();
	}
	
	if($.browser.msie && parseInt($.browser.version) < 9){
		$('<span class="frame"></span>').appendTo(".products .photo.video a");
		$('<span class="frame"></span>').appendTo("#slider-events .slider li .author-theme a.ph");
		$('<span class="frame"></span>').appendTo(".contact-persons .photo");
		$('<span class="frame"></span>').appendTo(".shop .photo a");
		$('<span class="frame"></span>').appendTo(".masters .photo");
		$('<span class="frame"></span>').appendTo(".author-class .photo");
		$('<span class="frame"></span>').appendTo(".next-classes .photo");
	}
	
	if($(".masters-list").length){
		$(".masters-list a").click(function(){
			var id = $(this).attr("href").toString().slice($(this).attr("href").indexOf("#") + 1);
			$("html, body").animate({
				scrollTop: $("#" + id).offset().top
			},400,function(){
				document.location.hash = "#" + id;
			});
			return false;
		})
	}
	
	if($(".order-button a").length){
		$(".order-button a").click(function(){
			var id = $(this).attr("href").toString().slice($(this).attr("href").indexOf("#") + 1);
			$("html, body").animate({
				scrollTop: $("#" + id).offset().top
			},400,function(){
				document.location.hash = "#" + id;
			});
			return false;
		});
	}
	
	if($(".conducted-class").length){
		$(".conducted-class .classes-list li:even").addClass("even");
	}
	
	if($("#idvideo").length){
		$("#idvideo header a").click(function(){
      if(!$(this).is(".active")){
        $("#idvideo header a").removeClass("active");
        $(this).addClass("active");
        $.ajax({
          type: "POST",
          url: "/smartme-ajax/video-production",
          cache: false,
          data: {data: $(this).attr("href").toString().slice($(this).attr("href").indexOf("#") + 1)},
          beforeSend: function(){
            $("#idvideo .pwrap").html('').addClass("ajaxload");
          },
          success: function(msg){
            $("#idvideo .pwrap").removeClass("ajaxload").html(msg);
          }
        });
      }
			return false;
		});
	}
	
	if($("#idproduct").length){
		$("#idproduct header a").click(function(){
      if(!$(this).is(".active")){
        $("#idproduct header a").removeClass("active");
        $(this).addClass("active");
        $.ajax({
          type: "POST",
          url: "/smartme-ajax/products",
          cache: false,
          data: {data: $(this).attr("href").toString().slice($(this).attr("href").indexOf("#") + 1)},
          beforeSend: function(){
            $("#idproduct .pwrap").html('').addClass("ajaxload");
          },
          success: function(msg){
            $("#idproduct .pwrap").removeClass("ajaxload").html(msg);
          }
        });
      }
			return false;
		});
	}
	if($("#gall a, .photo a").length) 
    $("#gall a, .photo a").overlay({target: '#gallery',expose: '#f1f1f1'}).gallery({template: '<strong>${title}</strong><span>Изображение ${index} из ${total}</span>',speed: 800});
});
