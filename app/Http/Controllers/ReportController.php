<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Report;

class ReportController extends Controller
{
    public function getReportsUser(Request $request){
        return response()->json(Report::where('user_id',$request->input('id'))->orderBy('created_at','desc')->get());
    }

    public function createReport(Request $request){
        return response()->json(Report::create($request->all()));
    }

    public function updateReport(Request $request){
        $report = Report::where('id',$request->input('id'))->first();

        if(is_null($request))
            return response()->json(0);
        else
            return response()->json($report->update($request->all()));
    }

    public function delReport(Request $request){
        $report = Report::where('id',$request->input('id'))->first();

        if(is_null($request))
            return response()->json(0);
        else
            return response()->json($report->delete());
    }

}
