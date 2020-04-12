import 'package:dart_code_metrics/src/models/function_report_metric.dart';
import 'package:dart_code_metrics/src/models/violation_level.dart';
import 'package:meta/meta.dart';

@immutable
class FunctionReport {
  final FunctionReportMetric<int> cyclomaticComplexity;

  final int linesOfCode;
  final ViolationLevel linesOfCodeViolationLevel;

  final double maintainabilityIndex;
  final ViolationLevel maintainabilityIndexViolationLevel;

  final int argumentsCount;
  final ViolationLevel argumentsCountViolationLevel;

  const FunctionReport(
      {@required this.cyclomaticComplexity,
      @required this.linesOfCode,
      @required this.linesOfCodeViolationLevel,
      @required this.maintainabilityIndex,
      @required this.maintainabilityIndexViolationLevel,
      @required this.argumentsCount,
      @required this.argumentsCountViolationLevel});
}
