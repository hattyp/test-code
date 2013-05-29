	$(function(){
				
				$("#room").change(function(){
					var rooms = "";
					var selected = $(this).val();
					
					// empty selected apart from first
					$("#select-people>div:gt(0)").remove();
					
					for(var i=2; i<=selected; i++){
						$("#select-people").append(
							'<div id="room-' + i + '">' + $("#room-1").html() + '</div>'
						);
						
						$("#select-people").find("#room-" + i).find(".room-number span").text(i);
						$("#select-people")
							.find("#room-" + i)
								.find("#select-children")
									.find("#room-1-children-1").attr("id","room-" + i + "-children-1").hide();
									
						$("#select-people")
							.find("#room-" + i)
								.find("#select-children>div:gt(0)").remove();
									
					}
				});
				
				$("select[name='children']").live("change", function(){
					var children = "";
					var selected = $(this).val();
					var parent_room = $(this).parent().attr("id");
					
					// empty selected apart from first
					$("#" + parent_room).find("#select-children>div:gt(0)").remove();
					
					if(selected > 0){
						$("#" + parent_room).find("#select-children>div:eq(0)").show();
					}else {
						$("#" + parent_room).find("#select-children>div:eq(0)").hide();
					}
					
					for(var i=2; i<=selected; i++){
						$("#" + parent_room).find("#select-children").append(
							'<div id="' + parent_room + '-children-' + i + '">' + $("#" + parent_room + "-children-1").html() + '</div>'
						);
						
						$("#" + parent_room + "-children-" + i).find(".child-age span").text(i);
					}
				});
				
			});