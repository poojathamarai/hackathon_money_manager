import Stack from '@mui/material/Stack';
export function Show({date,month,year,amount,data}) {
  return (
    <Stack spacing={2} className='list-group-item'>
    {date}/{month}/{year} {data}   ₹{amount}
 </Stack>);
}
