import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(staffMembers: any, filterString: string) {

    console.log("Testing pipe: ",  filterString)
   
    if (!filterString || staffMembers.length == 0){
      return staffMembers;
    }

    const staff: any = [];
    for (const member of staffMembers){
      if (member.name.toLowerCase().startsWith(filterString.toLowerCase())){
        staff.push(member)
      }
      
    }
    return staff;
  }
  

}
