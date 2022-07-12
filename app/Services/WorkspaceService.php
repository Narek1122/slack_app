<?php
namespace App\Services;
use Illuminate\Support\Facades\Auth;
use App\Services\SlugifyService;

class WorkspaceService
{

    /**
     * Store new workspace.
     *
     * @param  String  $name
     * @return \Illuminate\Http\JsonResponse
     */
    public function store($name)
    {
        $workspace = Auth::user()->workspaces();

        if($workspace->where('name',$name)->exists())
        {
            $old = Auth::user()->workspaces()
            ->where('name','like',$name)
            ->orderBy('name','desc')
            ->first();
            return ['generated' => [$old['name'] . 1,$old['name'] . 2]];
        }

        return $workspace->create(['name'=>$name,'slug'=>SlugifyService::slugify($name)]);


    }
}
