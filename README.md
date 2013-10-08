log2server
==========

This is a nodejs app to save log4j or log4net errors on the mongodb database.


For log4net you just need to create UDP appender like follow:

<?xml version="1.0" encoding="utf-8" ?>
<log4net>
  <appender name="UdpAppender" type="log4net.Appender.UdpAppender">
    <remoteAddress value="monaco" />
    <remotePort value="43278" />
    <layout type="log4net.Layout.XmlLayoutSchemaLog4j" />
  </appender>
  <root>
    <level value="ALL" />
    <appender-ref ref="UdpAppender" />
  </root>
</log4net>