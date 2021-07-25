name_of_the_student_array=[];

function submit(){
    var display_student_array=[];
    for(var U=1;U<=5;U++){
        var name_of_the_student=document.getElementById("name_of_the_student_"+U).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }
    console.log(name_of_the_student_array);
    var length_array=name_of_the_student_array.length;
    console.log(length_array);
    for(var C=0;C<length_array;C++){
        display_student_array.push("<h4>name-"+name_of_the_student_array[C]+"</h4>");
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;

    var remove_commas=display_student_array.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var length_array=name_of_the_student_array.length;
    console.log(length_array);
    var display_student_array_sort=[];
    for(var C=0;C<length_array;C++){
        display_student_array_sort.push("<h4>name-"+name_of_the_student_array[C]+"</h4>");
        console.log(display_student_array_sort);
    }
    var remove_commas=display_student_array_sort.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}