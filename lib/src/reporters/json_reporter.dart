import 'dart:convert';

import 'package:dart_code_metrics/src/models/component_record.dart';
import 'package:dart_code_metrics/src/models/config.dart';
import 'package:dart_code_metrics/src/reporters/reporter.dart';
import 'package:dart_code_metrics/src/reporters/utility_selector.dart';
import 'package:meta/meta.dart';

/// Machine-readable report in JSON format
class JsonReporter implements Reporter {
  final Config reportConfig;

  JsonReporter({@required this.reportConfig});

  @override
  Iterable<String> report(Iterable<ComponentRecord> records) =>
      (records?.isNotEmpty ?? false)
          ? [json.encode(records.map(_analysisRecordToJson).toList())]
          : [];

  Map<String, Object> _analysisRecordToJson(ComponentRecord record) {
    final componentReport =
        UtilitySelector.componentReport(record, reportConfig);
    return {
      'source': record.relativePath,
      'records': record.records.map((key, value) {
        final report = UtilitySelector.functionReport(value, reportConfig);
        return MapEntry(key, {
          'cyclomatic-complexity': report.cyclomaticComplexity.value,
          'cyclomatic-complexity-violation-level': report
              .cyclomaticComplexity.violationLevel
              .toString()
              .toLowerCase(),
          'lines-of-code': report.linesOfCode,
          'lines-of-code-violation-level':
              report.linesOfCodeViolationLevel.toString().toLowerCase(),
          'maintainability-index': report.maintainabilityIndex.toInt(),
          'maintainability-index-violation-level': report
              .maintainabilityIndexViolationLevel
              .toString()
              .toLowerCase(),
          'number-of-arguments': report.argumentsCount,
          'number-of-arguments-violation-level':
              report.argumentsCountViolationLevel.toString().toLowerCase(),
        });
      }),
      'average-number-of-arguments': componentReport.averageArgumentsCount,
      'total-number-of-arguments-violations':
          componentReport.totalArgumentsCountViolations,
    };
  }
}
