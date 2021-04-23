-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2021 at 10:06 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `students`
--

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `code` varchar(10) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`code`, `name`) VALUES
('CMP020C101', 'Software Development 1'),
('CMP020C102', 'Computer Systems'),
('CMP020C103', 'Mathematics for Computer Science'),
('CMP020C104', 'Software Development 2'),
('CMP020C105', 'Computing and Society'),
('CMP020C106', 'Databases'),
('PHY020C101', 'Physics Skills and Techniques'),
('PHY020C102', 'Mathematics for Physics'),
('PHY020C103', 'Computation for Physics'),
('PHY020C104', 'Classical Physics'),
('PHY020C105', 'Introduction to Modern Physics'),
('PHY020C106', 'Introduction to Astrophysics');

-- --------------------------------------------------------

--
-- Table structure for table `programmes`
--

CREATE TABLE `programmes` (
  `id` varchar(8) NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `programmes`
--

INSERT INTO `programmes` (`id`, `name`) VALUES
('09UU0001', 'BSc Computer Science'),
('09UU0002', 'BEng Software Engineering'),
('09UU0003', 'BSc Physics');

-- --------------------------------------------------------

--
-- Table structure for table `programme_modules`
--

CREATE TABLE `programme_modules` (
  `programme` varchar(8) NOT NULL,
  `module` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `programme_modules`
--

INSERT INTO `programme_modules` (`programme`, `module`) VALUES
('09UU0001', 'CMP020C101'),
('09UU0001', 'CMP020C102'),
('09UU0001', 'CMP020C103'),
('09UU0001', 'CMP020C104'),
('09UU0001', 'CMP020C105'),
('09UU0001', 'CMP020C106'),
('09UU0002', 'CMP020C101'),
('09UU0002', 'CMP020C102'),
('09UU0002', 'CMP020C103'),
('09UU0002', 'CMP020C104'),
('09UU0002', 'CMP020C105'),
('09UU0002', 'CMP020C106'),
('09UU0003', 'PHY020C101'),
('09UU0003', 'PHY020C102'),
('09UU0003', 'PHY020C103'),
('09UU0003', 'PHY020C104'),
('09UU0003', 'PHY020C105'),
('09UU0003', 'PHY020C106');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`) VALUES
(1, 'Kevin Chalmers'),
(2, 'Lisa Haskel'),
(3, 'Arturo Araujo'),
(4, 'Foo Bar'),
(100, 'Mohammed Ali'),
(200, 'Ada Lovelace');

-- --------------------------------------------------------

--
-- Table structure for table `student_programme`
--

CREATE TABLE `student_programme` (
  `id` int(11) DEFAULT NULL,
  `programme` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_programme`
--

INSERT INTO `student_programme` (`id`, `programme`) VALUES
(1, '09UU0002'),
(2, '09UU0001'),
(3, '09UU0003'),
(4, '09UU0001');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`code`);

--
-- Indexes for table `programmes`
--
ALTER TABLE `programmes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `programme_modules`
--
ALTER TABLE `programme_modules`
  ADD KEY `programme` (`programme`),
  ADD KEY `module` (`module`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student_programme`
--
ALTER TABLE `student_programme`
  ADD KEY `id` (`id`),
  ADD KEY `programme` (`programme`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `programme_modules`
--
ALTER TABLE `programme_modules`
  ADD CONSTRAINT `programme_modules_ibfk_1` FOREIGN KEY (`programme`) REFERENCES `programmes` (`id`),
  ADD CONSTRAINT `programme_modules_ibfk_2` FOREIGN KEY (`module`) REFERENCES `modules` (`code`);

--
-- Constraints for table `student_programme`
--
ALTER TABLE `student_programme`
  ADD CONSTRAINT `student_programme_ibfk_1` FOREIGN KEY (`id`) REFERENCES `students` (`id`),
  ADD CONSTRAINT `student_programme_ibfk_2` FOREIGN KEY (`programme`) REFERENCES `programmes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
