# Practical 1.7 — Bug Reporting

## Overview

Praktikum ini bertujuan untuk membuat laporan bug yang lengkap, jelas, dan profesional menggunakan Jira. Pengujian dilakukan pada aplikasi kalkulator sederhana yang memiliki kesalahan pada operasi penjumlahan.

**Tools:**
- Jira Cloud
- Google Chrome
- Chrome DevTools
- HTML, CSS, JavaScript
- Node.js

## Application Under Test

Aplikasi kalkulator sederhana dijalankan secara lokal melalui:

`http://localhost:3000`

Aplikasi ini dibuat khusus untuk latihan Quality Assurance dengan satu bug yang sengaja ditanamkan pada fungsi penjumlahan.

## Test Scenario

**Test Case:** Addition Calculation

| Attribute | Value |
|---|---|
| First Number | 2 |
| Operator | + |
| Second Number | 2 |
| Expected Result | 4 |
| Actual Result | 5 |
| Test Result | FAIL |

### Steps to Reproduce

1. Open the calculator application.
2. Enter `2` in the first number field.
3. Select the addition (`+`) operator.
4. Enter `2` in the second number field.
5. Click the `Hitung (=)` button.
6. Observe the displayed result.

### Environment

| Component | Details |
|---|---|
| Operating System | Windows 11 Home Single Language |
| OS Version | 26H2 (Build 26300.10075) |
| Browser | Google Chrome 158.0.8127.37 |
| Browser Architecture | 64-bit, Stable |
| Application URL | `http://localhost:3000` |

## Bug Report

**Issue Key:** QBLP-2

**Summary:** Hasil penjumlahan 2+2 menampilkan 5

**Issue Type:** Bug

**Severity:** Major

**Priority:** High

**Status:** Open

**Assignee:** Unassigned

**Jira Project:** QA Bug Lifecycle Practice

**Jira Issue:** [QBLP-2 — Hasil penjumlahan 2+2 menampilkan 5](https://rashif-qa-practice.atlassian.net/browse/QBLP-2)

### Bug Description

The calculator displays an incorrect result when performing an addition operation. When the user enters 2 + 2, the application displays 5 instead of the expected result, 4.

### Impact

The addition operation produces an incorrect calculation result, potentially causing users to receive inaccurate numerical information.

## Evidence

Screenshots collected during testing:

| Evidence | Description |
|---|---|
| `01-calculator-initial-state.png` | Initial calculator interface |
| `02-addition-bug-result.png` | Incorrect result displayed after calculating 2 + 2 |
| `03-browser-console-log.png` | Browser Console showing expected and actual values |

## Bug Report Export

The Jira issue was exported as a PDF document.

**File:** `report/QBLP-2-Bug-Report.pdf`

The exported report contains the bug summary, description, reproduction steps, expected and actual results, environment details, severity, priority, and evidence attachments.

## Conclusion

The practical exercise demonstrated how to identify a software defect and document it using a structured bug report in Jira.

The report includes the information required by developers to understand the problem, reproduce the issue, identify its impact, and investigate the incorrect calculation behavior.

The issue remains in **Open** status because no bug-fixing activity was part of this practical exercise.

## Limitations

The calculator is a locally hosted practice application with an intentionally introduced defect. The findings represent a controlled QA learning exercise and do not describe a defect in a publicly deployed calculator application.