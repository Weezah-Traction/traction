
export function load({ params }) {
     if (params.slug === '2_11_24') {
       return {
          date: "2/11/24", 
          timeOfDay: "12:30pm", 
          miles: "2.2", 
          runs: "1", 
          avgPace: "5.24", 
          time: "13:34"
       };
     }
 
     if (params.slug === '2_9_24') {
       return {
          date: "2/9/24", 
          timeOfDay: "2:34pm", 
          miles: "3.4", 
          runs: "2", 
          avgPace: "4.45", 
          time: "21:03"
       };
     }
   
     throw error(404, 'Not found');
   }