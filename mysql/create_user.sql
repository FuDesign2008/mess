
CREATE USER 'sqltest'@'localhost' IDENTIFIED BY 'sql_TEST_123';
GRANT ALL PRIVILEGES ON *.* TO 'sqltest'@'localhost' WITH GRANT OPTION;

CREATE USER 'sqltest'@'%' IDENTIFIED BY 'sql_test_ALL_123';
GRANT ALL PRIVILEGES ON *.* TO 'sqltest'@'%' WITH GRANT OPTION;

CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin_123';
GRANT RELOAD,PROGRESS ON *.* TO 'admin'@'localhost';

CREATE USER 'dummy'@'localhost';
