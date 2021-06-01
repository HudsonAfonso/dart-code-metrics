import 'dart:io';

import '../../../../../reporters/models/console_reporter.dart';
import '../../../models/unused_files_file_report.dart';

class UnusedFilesConsoleReporter
    extends ConsoleReporter<UnusedFilesFileReport> {
  UnusedFilesConsoleReporter(IOSink output) : super(output);

  @override
  Future<void> report(Iterable<UnusedFilesFileReport> records) async {
    if (records.isEmpty) {
      output.writeln('No unused files found!');

      return;
    }

    for (final analysisRecord in records) {
      output.writeln('Unused file: ${analysisRecord.relativePath}');
    }
  }
}