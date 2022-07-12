<?php

namespace App\Http\Controllers\Chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Services\WorkspaceService;
use Illuminate\Support\Facades\Validator;
use App\Models\Workspace;

class WorkspaceContoller extends Controller
{

    /**
     *
     * @var WorkspaceService $workspace
     */
    protected $workspace;

    /**
     *
     * @return void
     */
    public function __construct()
    {
        $this->workspace = new WorkspaceService;
    }

    /**
     * Get user workspaces.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(['message' => 'Success','data'=> Auth::user()->workspaces], 200);
    }

    /**
     * Store new workspace.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $workspace = $this->workspace->store($request->name);


        return response()->json(['message' => 'Success','data'=> $workspace], 200);
    }

    /**
     * Destroy workspace.
     *
     * @param  Workspace  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Workspace $workspace)
    {
        $workspace->delete();

        return response()->json(['message' => 'Success'], 200);
    }
}
