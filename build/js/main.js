$(document).ready(function(){$(".open-call-transfer").on("click",function(){$(".popup-call-transfer").addClass("active"),$(this).addClass("active"),$(".popup-messages").removeClass("active"),$(".open-messages").removeClass("active"),$(".popup-data").removeClass("active"),$(".open-data").removeClass("active")}),$(".close-call-transfer").on("click",function(){$(".popup-call-transfer").removeClass("active"),$(".open-call-transfer").removeClass("active")}),$(".popup-call-transfer td").on("click",function(){$(this).toggleClass("active")}),$(".open-tags").on("click",function(){$(".popup-tags").addClass("active"),$(this).addClass("active")}),$(".close-tags").on("click",function(){$(".popup-tags").removeClass("active"),$(".open-tags").removeClass("active")}),$(".open-notes").on("click",function(){$(".popup-notes").addClass("active"),$(this).addClass("active")}),$(".close-notes").on("click",function(){$(".popup-notes").removeClass("active"),$(".open-notes").removeClass("active")}),$(window).click(function(a){$(".popup-small").hasClass("active")?$(".caller").addClass("small"):$(".caller").removeClass("small")}),$(".open-messages").on("click",function(){$(".popup-messages").addClass("active"),$(this).addClass("active"),$(".popup-call-transfer").removeClass("active"),$(".open-call-transfer").removeClass("active"),$(".popup-data").removeClass("active"),$(".open-data").removeClass("active")}),$(".close-messages").on("click",function(){$(".popup-messages").removeClass("active"),$(".open-messages").removeClass("active")}),$(".open-data").on("click",function(){$(".popup-data").addClass("active"),$(this).addClass("active"),$(".popup-call-transfer").removeClass("active"),$(".open-call-transfer").removeClass("active")}),$(".close-data").on("click",function(){$(".popup-data").removeClass("active"),$(".open-data").removeClass("active")})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImFkZENsYXNzIiwidGhpcyIsInJlbW92ZUNsYXNzIiwidG9nZ2xlQ2xhc3MiLCJ3aW5kb3ciLCJjbGljayIsImUiLCJoYXNDbGFzcyJdLCJtYXBwaW5ncyI6IkFBR0FBLEVBQUdDLFVBQVdDLE1BQU0sV0FNaEJGLEVBQUUsdUJBQXVCRyxHQUFHLFFBQVMsV0FDakNILEVBQUUsd0JBQXdCSSxTQUFTLFVBQ25DSixFQUFFSyxNQUFNRCxTQUFTLFVBQ2pCSixFQUFFLG1CQUFtQk0sWUFBWSxVQUNqQ04sRUFBRSxrQkFBa0JNLFlBQVksVUFDaENOLEVBQUUsZUFBZU0sWUFBWSxVQUM3Qk4sRUFBRSxjQUFjTSxZQUFZLFlBR2hDTixFQUFFLHdCQUF3QkcsR0FBRyxRQUFTLFdBQ2xDSCxFQUFFLHdCQUF3Qk0sWUFBWSxVQUN0Q04sRUFBRSx1QkFBdUJNLFlBQVksWUFLekNOLEVBQUUsMkJBQTJCRyxHQUFHLFFBQVMsV0FDdENILEVBQUVLLE1BQU1FLFlBQVksWUFLdkJQLEVBQUUsY0FBY0csR0FBRyxRQUFTLFdBQ3hCSCxFQUFFLGVBQWVJLFNBQVMsVUFDMUJKLEVBQUVLLE1BQU1ELFNBQVMsWUFHckJKLEVBQUUsZUFBZUcsR0FBRyxRQUFTLFdBQ3pCSCxFQUFFLGVBQWVNLFlBQVksVUFDN0JOLEVBQUUsY0FBY00sWUFBWSxZQUtoQ04sRUFBRSxlQUFlRyxHQUFHLFFBQVMsV0FDekJILEVBQUUsZ0JBQWdCSSxTQUFTLFVBQzNCSixFQUFFSyxNQUFNRCxTQUFTLFlBR3JCSixFQUFFLGdCQUFnQkcsR0FBRyxRQUFTLFdBQzFCSCxFQUFFLGdCQUFnQk0sWUFBWSxVQUM5Qk4sRUFBRSxlQUFlTSxZQUFZLFlBS2pDTixFQUFFUSxRQUFRQyxNQUFNLFNBQVNDLEdBQ2pCVixFQUFFLGdCQUFnQlcsU0FBUyxVQUMzQlgsRUFBRSxXQUFXSSxTQUFTLFNBRXRCSixFQUFFLFdBQVdNLFlBQVksV0FNakNOLEVBQUUsa0JBQWtCRyxHQUFHLFFBQVMsV0FDNUJILEVBQUUsbUJBQW1CSSxTQUFTLFVBQzlCSixFQUFFSyxNQUFNRCxTQUFTLFVBQ2pCSixFQUFFLHdCQUF3Qk0sWUFBWSxVQUN0Q04sRUFBRSx1QkFBdUJNLFlBQVksVUFDckNOLEVBQUUsZUFBZU0sWUFBWSxVQUM3Qk4sRUFBRSxjQUFjTSxZQUFZLFlBR2hDTixFQUFFLG1CQUFtQkcsR0FBRyxRQUFTLFdBQzdCSCxFQUFFLG1CQUFtQk0sWUFBWSxVQUNqQ04sRUFBRSxrQkFBa0JNLFlBQVksWUFLcENOLEVBQUUsY0FBY0csR0FBRyxRQUFTLFdBQ3hCSCxFQUFFLGVBQWVJLFNBQVMsVUFDMUJKLEVBQUVLLE1BQU1ELFNBQVMsVUFDakJKLEVBQUUsd0JBQXdCTSxZQUFZLFVBQ3RDTixFQUFFLHVCQUF1Qk0sWUFBWSxZQUd6Q04sRUFBRSxlQUFlRyxHQUFHLFFBQVMsV0FDekJILEVBQUUsZUFBZU0sWUFBWSxVQUM3Qk4sRUFBRSxjQUFjTSxZQUFZIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ3VzdG9tXG4gKi9cbiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBBY3Rpb25zXG5cbiAgICAvLyBPcGVuL0Nsb3NlIGNhbGwgdHJhbnNmZXJcblxuICAgICQoJy5vcGVuLWNhbGwtdHJhbnNmZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5wb3B1cC1jYWxsLXRyYW5zZmVyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLnBvcHVwLW1lc3NhZ2VzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCcub3Blbi1tZXNzYWdlcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLnBvcHVwLWRhdGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJy5vcGVuLWRhdGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuY2xvc2UtY2FsbC10cmFuc2ZlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnBvcHVwLWNhbGwtdHJhbnNmZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJy5vcGVuLWNhbGwtdHJhbnNmZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBDYWxsIHRyYW5zZmVyIG1lbWJlcnNcblxuICAgICQoJy5wb3B1cC1jYWxsLXRyYW5zZmVyIHRkJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy8gT3Blbi9DbG9zZSB0YWdzXG5cbiAgICAkKCcub3Blbi10YWdzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcucG9wdXAtdGFncycpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuY2xvc2UtdGFncycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnBvcHVwLXRhZ3MnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJy5vcGVuLXRhZ3MnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBPcGVuL0Nsb3NlIG5vdGVzXG5cbiAgICAkKCcub3Blbi1ub3RlcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnBvcHVwLW5vdGVzJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoJy5jbG9zZS1ub3RlcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnBvcHVwLW5vdGVzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCcub3Blbi1ub3RlcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8vIENhbGxlciB3aW5kb3dcblxuICAgICQod2luZG93KS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICgkKCcucG9wdXAtc21hbGwnKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICQoJy5jYWxsZXInKS5hZGRDbGFzcygnc21hbGwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5jYWxsZXInKS5yZW1vdmVDbGFzcygnc21hbGwnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gT3Blbi9DbG9zZSBtZXNzYWdlc1xuXG4gICAgJCgnLm9wZW4tbWVzc2FnZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5wb3B1cC1tZXNzYWdlcycpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJy5wb3B1cC1jYWxsLXRyYW5zZmVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCcub3Blbi1jYWxsLXRyYW5zZmVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCcucG9wdXAtZGF0YScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLm9wZW4tZGF0YScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoJy5jbG9zZS1tZXNzYWdlcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnBvcHVwLW1lc3NhZ2VzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCcub3Blbi1tZXNzYWdlcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8vIE9wZW4vQ2xvc2UgZGF0YVxuXG4gICAgJCgnLm9wZW4tZGF0YScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnBvcHVwLWRhdGEnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCcucG9wdXAtY2FsbC10cmFuc2ZlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLm9wZW4tY2FsbC10cmFuc2ZlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoJy5jbG9zZS1kYXRhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcucG9wdXAtZGF0YScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLm9wZW4tZGF0YScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8vIFNlYXJjaCBtZW1iZXJzXG5cbiAgICBmdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBEZWNsYXJlIHZhcmlhYmxlc1xuICAgICAgICB2YXIgaW5wdXQsIGZpbHRlciwgdGFibGUsIHRyLCB0ZCwgaSwgdHh0VmFsdWU7XG4gICAgICAgIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1iZXJzLWlucHV0XCIpO1xuICAgICAgICBmaWx0ZXIgPSBpbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtYmVycy1zZWFyY2hcIik7XG4gICAgICAgIHRyID0gdGFibGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0clwiKTtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHRhYmxlIHJvd3MsIGFuZCBoaWRlIHRob3NlIHdobyBkb24ndCBtYXRjaCB0aGUgc2VhcmNoIHF1ZXJ5XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGQgPSB0cltpXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRkXCIpWzBdO1xuICAgICAgICAgICAgaWYgKHRkKSB7XG4gICAgICAgICAgICAgICAgdHh0VmFsdWUgPSB0ZC50ZXh0Q29udGVudCB8fCB0ZC5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKHR4dFZhbHVlLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJbaV0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdHJbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSk7Il19
