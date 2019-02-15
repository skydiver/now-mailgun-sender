const template = ({ name, email, message, ip, datetime }) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html>
<head>
<style type="text/css" media="screen">
  a, a:hover {
  text-decoration: none;
  color: #0862A2;
  font-weight: bold;
}

td, tr, th, table {
  padding: 0px;
  margin: 0px;
}

p {
  margin: 10px 0;
}
</style>
</head>

<body style="font-family: Avenir,Helvetica,sans-serif; box-sizing: border-box; color: #74787e; height: 100%; hyphens: auto; line-height: 1.4; margin: 0; -moz-hyphens: auto; -ms-word-break: break-all; width: 100% !important; -webkit-hyphens: auto; -webkit-text-size-adjust: none; word-break: break-word;">

  <table style="font-family: Avenir,Helvetica,sans-serif; box-sizing: border-box; padding: 0px; margin: 0px; width: 60%; border-collapse: collapse;">
    <tr style="padding: 0px; margin: 0px;">
      <td style="font-family: Avenir,Helvetica,sans-serif; box-sizing: border-box; margin: 0px; width: 20%; background-color: #ECF0F1; text-align: right; padding: 10px; border: solid 1px #D4D8DA; font-weight: bold;">Name:</td>
      <td style="font-family: Avenir,Helvetica,sans-serif; box-sizing: border-box; margin: 0px; width: 80%; background-color: #F9F9F9; padding: 10px; border: solid 1px #D4D8DA;">${ name }</td>
    </tr>
    <tr style="padding: 0px; margin: 0px;">
      <td style="font-family: Avenir,Helvetica,sans-serif; box-sizing: border-box; margin: 0px; width: 20%; background-color: #ECF0F1; text-align: right; padding: 10px; border: solid 1px #D4D8DA; font-weight: bold;">Email:</td>
      <td style="font-family: Avenir,Helvetica,sans-serif; box-sizing: border-box; margin: 0px; width: 80%; background-color: #F9F9F9; padding: 10px; border: solid 1px #D4D8DA;">${ email }</td>
    </tr>
    <tr style="padding: 0px; margin: 0px;">
      <td style="font-family: Avenir,Helvetica,sans-serif; box-sizing: border-box; margin: 0px; width: 20%; background-color: #ECF0F1; text-align: right; padding: 10px; border: solid 1px #D4D8DA; font-weight: bold;">Message:</td>
      <td style="font-family: Avenir,Helvetica,sans-serif; box-sizing: border-box; margin: 0px; width: 80%; background-color: #F9F9F9; padding: 10px; border: solid 1px #D4D8DA;">${ message }</td>
    </tr>
  </table>

  <div style="font-family: Avenir,Helvetica,sans-serif; box-sizing: border-box; width: 60%; text-align: right;">
    <p style="font-family: Avenir,Helvetica,sans-serif; box-sizing: border-box; line-height: 1.5em; margin-top: 0; text-align: left; margin: 10px 0; font-size: 0.8em; color: #888; font-weight: bold;">IP: ${ ip }</p>
    <p style="font-family: Avenir,Helvetica,sans-serif; box-sizing: border-box; line-height: 1.5em; margin-top: 0; text-align: left; margin: 10px 0; font-size: 0.8em; color: #888; font-weight: bold;">Time: ${ datetime }</p>
  </div>

</body>
</html>
`;

module.exports = template;